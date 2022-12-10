import React, { CSSProperties } from "react";
import { IconButton } from "@mui/material";
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from "@mui/icons-material";

const styles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  top: "5",
  listStyle: "none",
  padding: "0",
  margin: "0",
  marginTop: "10px",
};

export const PostActions: React.FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon fontSize={"small"} />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon fontSize={"small"} />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon fontSize={"small"} />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon fontSize={"small"} />
        </IconButton>
      </li>
    </ul>
  );
};
