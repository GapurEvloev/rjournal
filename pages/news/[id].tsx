import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import { PostComments } from '../../components/PostComments';
import { GetServerSideProps, NextPage } from 'next';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';

interface FullPostPageProps {
  post: PostItem;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const post = await Api(ctx).post.getOne(+id);

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log('Fulll post page', err);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
