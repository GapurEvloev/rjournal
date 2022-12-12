import type { NextPage } from "next";
import { MainLayout } from "../layouts/MainLayout";
import { Post } from "../components/Post";
import { PostItem } from "../utils/api/types";

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = () => {
  return (
    <MainLayout>
      <Post
        id={1}
        title={"The cat lay down to rest and became the hero of memes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores aut consequuntur dolor et fugit impedit ipsa itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora tenetur ullam.`"
        }
        imageUrl={
          "https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        }
      />
      <Post
        id={1}
        title={"The cat lay down to rest and became the hero of memes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores aut consequuntur dolor et fugit impedit ipsa itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora tenetur ullam.`"
        }
        imageUrl={
          "https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        }
      />
      <Post
        id={1}
        title={"The cat lay down to rest and became the hero of memes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores aut consequuntur dolor et fugit impedit ipsa itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora tenetur ullam.`"
        }
        imageUrl={
          "https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        }
      />
      <Post
        id={1}
        title={"The cat lay down to rest and became the hero of memes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores aut consequuntur dolor et fugit impedit ipsa itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora tenetur ullam.`"
        }
        imageUrl={
          "https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        }
      />
    </MainLayout>
  );
};

export default Home;
