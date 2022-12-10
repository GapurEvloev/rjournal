import { CommentItem } from "../utils/api/types";
import React from "react";
import { Api } from "../utils/api";

type UseCommentsProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentItem[]>>;
  comments: CommentItem[];
};

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = React.useState<CommentItem[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
      } catch (err) {
        console.warn("Fetch comments", err);
      }
    })();
  }, []);

  return { comments, setComments };
};
