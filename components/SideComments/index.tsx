import React from "react";
import ArrowRightIcon from "@mui/icons-material/NavigateNext";

import data from "../../data";
import styles from "./SideComments.module.scss";
import { CommentItem } from "./CommentItem";
import clsx from "clsx";
import { useComments } from "../../hooks/useComments";

export const SideComments = () => {
  // const { comments } = useComments();
  const comments = data.comments.popular;
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Comments <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
