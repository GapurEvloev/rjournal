import Link from "next/link";
import { Paper, Avatar, Typography, Button, Tabs, Tab } from "@mui/material";
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@mui/icons-material";

import { Post } from "../../components/Post";
import { MainLayout } from "../../layouts/MainLayout";

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="px-5 pt-5 mb-7" elevation={0}>
        <div className="flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <Typography
              style={{ fontWeight: "bold" }}
              className="mt-2.5"
              variant="h4"
            >
              Max Mustermann
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-2.5" />
              Write
            </Button>
          </div>
        </div>
        <div className="flex my-2.5">
          <Typography
            style={{ fontWeight: "bold", color: "#35AB66" }}
            className="mr-3.5"
          >
            +208
          </Typography>
          <Typography>2 subscribers</Typography>
        </div>
        <Typography>On the project since 15 Sep 2016</Typography>

        <Tabs
          className="mt-5"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Articles" />
          <Tab label="Comments" />
          <Tab label="Bookmarks" />
        </Tabs>
      </Paper>
      <div className="flex items-start">
        <div className="mr-5 flex">
          <Post />
        </div>
        <Paper
          style={{ width: 300 }}
          className="p-5 mb-5 flex-shrink-0"
          elevation={0}
        >
          <b>Subscribers</b>
          <div className="flex mt-3.5">
            <Avatar
              className="mr-2.5"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-2.5"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
