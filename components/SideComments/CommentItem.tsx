import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link";
import { PostItem, ResponseUser } from "../../utils/api/types";
import { Avatar } from "@mui/material";

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    id: number;
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullname[0]}</Avatar>
        <Link href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${post.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
