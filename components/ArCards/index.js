import { CardMedia, Typography, CardContent, Card } from "./arCards.style";
import { CommonModal } from "../common/modal";
import { useState } from "react";
import { ShowModalContent } from "../ShowModal";

export const ArticalsCrads = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card height={"330px"} width={"300px"} onClick={handleOpen}>
        {data.type == "Videos" && (
          <CardMedia
            component="video"
            height="200px"
            image={data.video_url}
            autoPlay
          />
        )}
        {data.type === "Articles" && (
          <CardMedia
            component="img"
            alt={data?.image?.alt}
            height="200px"
            image={data?.image?.url}
            title={data?.title}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h6" font="Sarabun" component="div">
            {data.title}
          </Typography>
          {/* <Typography variant="body2" font="Sarabun" color="text.secondary">
          {ReactHtmlParser(data.description)}
        </Typography> */}
        </CardContent>
      </Card>
      <CommonModal
        open={open}
        handleClose={handleClose}
        height={"720px"}
        width="60%"
      >
        <ShowModalContent data={data} handleClose={handleClose} />
      </CommonModal>
    </>
  );
};
