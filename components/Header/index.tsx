import React from "react";
import Link from "next/link";
import { Avatar, Button, IconButton, List, ListItemButton, Paper } from "@mui/material";
import {
  Search,
  Create,
  SmsOutlined as Message,
  NotificationsNoneOutlined as Notification,
  MenuOutlined,
  ExpandMore,
  AccountCircleOutlined as UserIcon,
} from "@mui/icons-material";
import { Api } from "../../utils/api";
import { PostItem } from "../../utils/api/types";

import styles from "./Header.module.sass";
import { AuthDialog } from "../AuthDialog";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";

const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [posts, setPosts] = React.useState<PostItem[]>([]);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    try {
      const { items } = await Api().post.search({title: e.currentTarget.value });
      setPosts(items);
    } catch (error) {
      console.warn(error);
    }
  }

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
            <input value={searchValue} onChange={handleChangeInput} type="text" placeholder="Search" />
            <Search />
            {posts.length > 0 && (
              <Paper className={styles.searchBlockPopup}>
                <List>
                  {posts.map((obj) => (
                    <Link key={obj.id} href={`/news/${obj.id}`}>
                      <a>
                        <ListItemButton>{obj.title}</ListItemButton>
                      </a>
                    </Link>
                  ))}
                </List>
              </Paper>
            )}
          </label>
        </div>

        <Link href={"/write"}>
          <a>
            <Button variant="contained">
              <Create classes={{ root: styles.create }} />
            </Button>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <IconButton className="ml-4">
          <Message />
        </IconButton>
        <IconButton className="ml-4">
          <Notification />
        </IconButton>
        {userData ? (
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
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Log in
          </div>
        )}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};

export default Header;
