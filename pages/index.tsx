import type { NextPage } from "next";
import { MainLayout } from "../layouts/MainLayout";
import { Post } from "../components/Post";
import { Api } from "../utils/api";
import { PostItem } from "../utils/api/types";

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {
        posts.map((post) => {
          console.log(post)
          return <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        })
      }
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
