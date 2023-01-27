import moment from "moment";
import React from "react";
import { Typography, IconButton, MenuItem, Menu, Avatar } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

import styles from "./Comment.module.scss";
import { ResponseUser } from "../../utils/api/types";
import { Api } from "../../utils/api";

interface CommentPostProps {
  id: number;
  user: ResponseUser;
  text: string;
  createdAt: string;
  currentUserId?: number;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentPostProps> = ({
  id,
  user,
  text,
  createdAt,
  currentUserId,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    if (window.confirm("Delete comment?")) {
      try {
        await Api().comment.remove(id);
        onRemove(id);
      } catch (err) {
        console.warn("Error remove comment", err);
        alert("Failed to delete comment");
      } finally {
        handleClose();
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{moment(new Date(createdAt)).fromNow()}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {user.id === currentUserId && (
        <>
          <span className={styles.replyBtn}>Reply</span>
          <IconButton size="small" onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem onClick={handleClickRemove}>Remove</MenuItem>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
