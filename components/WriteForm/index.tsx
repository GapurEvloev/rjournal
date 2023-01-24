import React from "react";
import { Button, Input } from "@mui/material";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Api } from "../../utils/api";
import { PostItem } from "../../utils/api/types";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("../Editor").then((mod) => mod.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(data?.title || "");
  const [blocks, setBlocks] = React.useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
    } catch (err) {
      console.warn("Create post", err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Title"
      />
      <div className={styles.editor}>
        {Editor && (
          <Editor
            initialBlocks={data?.body}
            onChange={(arr) => setBlocks(arr)}
          />
        )}
      </div>
      <Button
        disabled={isLoading || !blocks.length || !title}
        onClick={onAddPost}
        variant="contained"
        color="primary"
      >
        {data ? "Save" : "Publish"}
      </Button>
    </div>
  );
};
