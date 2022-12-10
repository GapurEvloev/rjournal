import React from "react";
import Link from "next/link";

import styles from "./LeftMenu.module.scss";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const menu = [
  { text: "Feed", icon: <FireIcon /> },
  { text: "Massages", icon: <MessageIcon />, path: "/messages" },
  { text: "Rating RJ", icon: <TrendingIcon />, path: "/rating" },
  { text: "Subscriptions", icon: <ListIcon />, path: "/follows" },
];

export const LeftMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj, index) => (
          <li key={index}>
            <Link href={`${obj.path}`}>
              <a>
                <Button
                  variant={router.asPath === obj.path ? "contained" : "text"}
                >
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
