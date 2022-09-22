import React from "react";
import Link from "next/link";
import { Avatar, Button, IconButton, Paper } from "@mui/material";
import {
  Search,
  Create,
  SmsOutlined as Message,
  NotificationsNoneOutlined as Notification,
  MenuOutlined,
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
        <IconButton>
          <Message />
        </IconButton>
        <IconButton>
          <Notification />
        </IconButton>
        <Link href="/profile/1">
          <Avatar
            className={styles.avatar}
            alt="Remy Sharp"
            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
          />
        </Link>
      </div>
    </Paper>
  );
};

export default Header;
