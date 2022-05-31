import { ScrollTable } from "../../components/Table";
import LabTabs from "../../components/Tabs";
import { Wrapper } from "../../components/wrapper";
import { Container, Typography } from "./timedoneed.style";
import { useState } from "react";
import { IconButton } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import HelpIcon from "@mui/icons-material/Help";
import { Banner } from "../../components/Banner";
import { ShortBanner } from "../../components/ShortBanner";
import { Layout } from "../../styles/space.stlye";
import { useEffect, useCallback } from "react";
import { getScheduleBasedOnUser } from "../../service/contentstackSDK";
import { checkCookies, getCookie } from "cookies-next";

export const TimeDoNeed = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [needTableData, setNeedTableData] = useState([]);
  const [value, setValue] = useState(0);

  const getData = useCallback(async () => {
    const schedule = await getScheduleBasedOnUser(
      "schedule",
      "user",
      "en-us",
      value === 0 ? "Donar" : "Counselor"
    );
    if (schedule.length > 0) {
      schedule.map((item) => {
        item.id = item.uid;
      });
    }
    setTableData(schedule);
  }, [value]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getNeedData = useCallback(async () => {
    const schedule = await getScheduleBasedOnUser(
      "schedule",
      "user",
      "en-us",
      "Volunteer"
    );
    if (schedule.length > 0) {
      schedule.map((item) => {
        item.id = item.uid;
      });
      setNeedTableData(schedule);
    }
  }, []);

  useEffect(() => {
    getNeedData();
  }, [getNeedData]);

  const columns = [
    { field: "id", headerName: "ID", width: 220, hide: true },
    { field: "title", headerName: "Title", width: 220 },
    { field: "display_name", headerName: "Display Name", width: 220 },
    { field: "meeting_id", headerName: "Meeting Id", width: 220 },
    { field: "date", headerName: "Date", width: 220 },
    { field: "topics", headerName: "Topics", width: 220 },
    {
      field: "join",
      headerName: "join Call",
      sortable: false,
      width: 220,
      renderCell: (params) => {
        return (
          <IconButton onClick={(data) => console.log(params.row)}>
            <VideoCallIcon color="primary" />
          </IconButton>
        );
      },
    },
  ];

  const props = {};

  return (
    <Wrapper>
      <Container>
        <Banner action={false} height={"500px"} imageHeight={"810px"} />
        <Layout />
        <LabTabs setValue={setValue} value={value} />
        {value === 0 ? (
          <ScrollTable TableHeader={columns} rows={tableData} />
        ) : (
          <ScrollTable TableHeader={columns} rows={tableData} />
        )}
        <Layout />
        {checkCookies("join_as") && getCookie("join_as") === "Needer" ? (
          <>
            <Typography variant="h2">Need Help ?</Typography>
            <Layout />
            <ScrollTable TableHeader={columns} rows={needTableData} />
          </>
        ) : (
          <ShortBanner />
        )}
        <Layout />
      </Container>
    </Wrapper>
  );
};
