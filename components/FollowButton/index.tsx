import React from "react";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

import styles from "./FollowButton.module.scss";

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = React.useState(false);

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 30 }}
    >
      {!followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20 }} />}
    </Button>
  );
};
