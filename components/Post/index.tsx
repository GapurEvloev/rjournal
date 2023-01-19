import { OutputData } from "@editorjs/editorjs";
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
  body?: OutputData["blocks"];
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  imageUrl,
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
          src={imageUrl}
          height={664}
          width={600}
          alt={title}
        />
      )}
      <PostActions />
    </Paper>
  );
};
