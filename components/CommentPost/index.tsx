import React from "react";
import { IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./CommentPost.module.scss";

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const Index: React.FC<CommentPostProps> = ({ user, post, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={0} className="p-5" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="#">{post.title}</a>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography className="mt-10 mb-15">{text}</Typography>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={3}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Remove</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </Paper>
  );
};
