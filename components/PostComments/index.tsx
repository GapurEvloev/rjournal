import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Comment } from "../Comment";
import { AddCommentForm } from "../AddCommentForm";
import { CommentItem } from "../../utils/api/types";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";
import { useComments } from "../../hooks/useComments";

interface PostComments {
  postId: number;
}

export const PostComments: React.FC<PostComments> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = React.useState(0);
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
        {comments.length > 0 && <Typography variant="h6" className="mb-5">
          {comments.length} {comments.length > 1 ? "comments" : "comment"}
        </Typography>}
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-5"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Popular" />
          <Tab label="By order" />
        </Tabs>
        <Divider />
        {userData && (
          <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />
        )}
        <div className="mb-5" />
        {comments.map((obj) => (
          <Comment
            key={obj.id}
            id={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
            currentUserId={userData?.id}
            onRemove={onRemoveComment}
          />
        ))}
      </div>
    </Paper>
  );
};
