import { IntialContainer, Button, Typography } from "./shortBanner.style";
import { CommonModal } from "../common/modal";
import { useState } from "react";
import { ScheduleMeeting } from "../Form/Schedule";

export const ShortBanner = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IntialContainer
        backgroundImage={
          "https://images.contentstack.io/v3/assets/blt8acc25df64f80269/blta8964f2b3a50ebcf/628e24fd6f81705517a1efe3/istockphoto-1332601848-170667a.jpg"
        }
      >
        <Typography variant="h2">Want To Donate Youre Time</Typography>
        <Button onClick={handleOpen}>
          <Typography variant="body1">Schedule</Typography>
        </Button>
      </IntialContainer>
      <CommonModal open={open} handleClose={handleClose}>
        <ScheduleMeeting handleClose={handleClose} />
      </CommonModal>
    </>
  );
};
