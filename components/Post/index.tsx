import React from "react";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import styles from "./Post.module.scss";
import { PostActions } from "./PostActions";

interface PostProps {
  title: string;
  id: number;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({
  id = 1,
  title = `The cat lay down to rest and became the hero of memes`,
  description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto asperiores aut consequuntur dolor et fugit impedit ipsa itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora tenetur ullam.`,
  imageUrl = `https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/`,
}) => {
  return (
    <Paper elevation={0} className="p-5" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-2.5 mb-4">{description}</Typography>
      {imageUrl && (
        <Image
          src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
          height={664}
          width={600}
          alt="The cat lay down to rest and became the hero of memes"
        />
      )}
      <PostActions />
    </Paper>
  );
};
