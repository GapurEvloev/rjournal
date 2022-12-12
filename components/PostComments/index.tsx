import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Comment } from "../Comment";
import { AddCommentForm } from "../AddCommentForm";
import data from "../../data";
import { Api } from "../../utils/api";
import { CommentItem } from "../../utils/api/types";
// import { useAppSelector } from "../../redux/hooks";
// import { selectUserData } from "../../redux/slices/user";
import { useComments } from "../../hooks/useComments";

interface PostComments {
  postId: number;
}

export const PostComments: React.FC<PostComments> = ({ postId }) => {
  // const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = React.useState(0);
  const userData = data.comments[!activeTab ? "popular" : "new"];
  const { comments, setComments } = useComments(postId);

  const onAddComment = (obj: CommentItem) => {
    setComments((prev) => [...prev, obj]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-10 p-8">
      <div className="container">
        <Typography variant="h6" className="mb-5">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-5"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        {userData && (
          <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />
        )}
        <div className="mb-5" />
        {userData.map((obj) => (
          <Comment
            key={obj.id}
            id={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
            currentUserId={1}
            onRemove={onRemoveComment}
          />
        ))}
      </div>
    </Paper>
  );
};
