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
import { Api } from "../utils/api";
import { NextPage } from "next";
import { ResponseUser } from "../utils/api/types";

interface RatingPageProps {
  users: ResponseUser[] | undefined;
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
  return (
    <MainLayout>
      <Paper className="p-5 pb-0 mb-5" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
        >
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получают
          Plus-аккаунт на месяц.
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
            <TableRow key={"12231"}>
              <TableCell component="th" scope="row">
                <span className="mr-2">{"12231"}</span>
                {"12231"}
              </TableCell>
              <TableCell align="right">{"12231"}</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
            {/* {users.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell component="th" scope="row">
                  <span className="mr-7">{obj.id}</span>
                  {obj.fullName}
                </TableCell>
                <TableCell align="right">{obj.commentsCount * 2}</TableCell>
                <TableCell align="right">
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))} */}
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
