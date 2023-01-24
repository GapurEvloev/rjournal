import React from "react";
import Input from "@mui/material/Input";
import styles from "./AddCommentForm.module.scss";
import { Button } from "@mui/material";
import { Api } from "../../utils/api";
import { CommentItem } from "../../utils/api/types";

interface AddCommentFormProps {
  postId: number;
  onSuccessAdd: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onSuccessAdd }) => {
  const [clicked, setClicked] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');

  const onAddComment = async () => {
    try {
      setLoading(true);
      const comment = await Api().comment.create({
        postId,
        text,
      });
      onSuccessAdd(comment);
      setClicked(false);
      setText('');
    } catch (err) {
      console.warn('Add comment', err);
      alert('Failed to send a comment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Write a comment..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      )}
    </div>
  );
};
