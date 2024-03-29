import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

import { MainLayout } from "../layouts/MainLayout";
import { FollowButton } from "../components/FollowButton";
import { NextPage } from 'next';
import { Api } from "../utils/api";
import { ResponseUser } from "../utils/api/types";

interface RatingPageProps {
  users?: ResponseUser[];
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
  return (
    <MainLayout>
      <Paper className="p-5 pb-0 mb-5" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
        >
          Rating of communities and blogs
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          The top ten authors and commentators, as well as administrators of the first ten communities in the ranking at the end of the month receive a free Plus account for a month.
        </Typography>
        <Tabs
          className="mt-2.5"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Last month" />
          <Tab label="Last 3 months" />
          <Tab label="All the time" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User name</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell component="th" scope="row">
                  <span className="mr-7">{obj.id}</span>
                  {obj.fullName}
                </TableCell>
                <TableCell align="right">{obj.commentsCount && obj.commentsCount * 2}</TableCell>
                <TableCell align="right">
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll();
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      users: null,
    },
  };
};

export default Rating;
