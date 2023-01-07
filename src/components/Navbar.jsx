import React from "react";
import { logo } from "../utils/constants";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import  SearchBar  from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ justifyContent: "space-between" }}
    >
      <Link>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
