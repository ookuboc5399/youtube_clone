import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
      {videos.map((item) => (

      ))}
  );
};

export default Videos;
