import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";
import { Post } from "../components/Post";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RJournal</title>
        <meta name="description" content="Pet project - RJournal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainLayout>
        <Post />
      </MainLayout>
    </div>
  );
};

export default Home;
