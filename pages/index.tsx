import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";
import { Post } from "../components/Post";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
};

export default Home;
