import { Button, Paper, Typography } from "@mui/material";
import React from 'react';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import UserAddIcon from '@mui/icons-material/PersonAddOutlined';
import { PostActions } from "../Post/PostActions";

import styles from './FullPost.module.scss';
import { OutputData } from '@editorjs/editorjs';

interface FullPostProps {
  title: string;
  blocks: OutputData['blocks'];
}

export const FullPost: React.FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.text}>
          {blocks.map((obj) => (
            <Typography key={obj.id} dangerouslySetInnerHTML={{ __html: obj.data.text }} />
          ))}

          <div style={{ width: 250, marginTop: 20 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-8 mb-8">
            <div className={styles.userInfo}>
              <img
                src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
                alt="Avatar"
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div>
              <Button variant="contained" className="mr-4">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-2.5">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
