import React from "react";
import Link from "next/link";
import { Avatar, Button, IconButton, Paper } from "@mui/material";
import {
  Search,
  Create,
  SmsOutlined as Message,
  NotificationsNoneOutlined as Notification,
  MenuOutlined,
  ExpandMore,
} from "@mui/icons-material";

import styles from "./Header.module.sass";

const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={4}>
      <div className="flex items-center">
        <IconButton>
          <MenuOutlined />
        </IconButton>
        <Link href="/">
          <a>
            <img
              className="mr-5 ml-3 h-9"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <label>
            <input type="text" placeholder="Search" />
            <Search />
          </label>
        </div>

        <Button>
          <Create classes={{ root: styles.create }} />
        </Button>
      </div>
      <div className="flex items-center">
        <IconButton className="ml-4">
          <Message />
        </IconButton>
        <IconButton className="ml-4">
          <Notification />
        </IconButton>
        <Link href="/profile/1">
          <a className="flex items-center">
            <Avatar
              className={`${styles.avatar} ml-4`}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ExpandMore />
          </a>
        </Link>
      </div>
    </Paper>
  );
};

export default Header;