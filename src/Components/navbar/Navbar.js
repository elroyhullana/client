import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Dialog from "@mui/material/Dialog";

import NavbarDrawer from "../navbar/NavbarDrawer";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const imageStyle = {
    height: "auto",
    width: "200px",
  };

  const location = useLocation();

  const activeTab = () => {
    switch (location.pathname) {
      case "/recentworks":
        return 1;
      case "/contact":
        return 2;
      default:
        return 0; // or handle other cases accordingly
    }
  };

  const [value, setValue] = useState(activeTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#372C2E" }} position="static">
        <Toolbar>
          <Link to="/">
            <img
              src="/Images/HULLANA-darkbg.png"
              alt="headerLogo"
              style={imageStyle}
            />
          </Link>
          {isMatch ? (
            <NavbarDrawer />
          ) : (
            <Tabs
              sx={{
                padding: "30px",
                marginLeft: "auto",
              }}
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  display: "none",
                },
              }}
            >

              <Tab
                component={Link}
                to="/"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  marginRight: "20px",

                  "&:hover": {
                    color: "#DE9E48",
                  },
                  "&.Mui-selected": {
                    textTransform: "capitalize",
                    color: "#DE9E48",
                  },
                }}
              />

              <Tab
                component={Link}
                to="/recentworks"
                label={"RECENT WORKS"}
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  marginRight: "20px",

                  "&:hover": {
                    color: "#DE9E48",
                  },
                  "&.Mui-selected": {
                    textTransform: "capitalize",
                    color: "#DE9E48",
                  },
                }}
              />

              <Tab
                label={"CONTACT"}
                onClick={handleOpenDialog}
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  marginRight: "20px",

                  "&:hover": {
                    color: "#DE9E48",
                  },
                  "&.Mui-selected": {
                    textTransform: "capitalize",
                    color: "#DE9E48",
                  },
                }}
              />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Contact Me</h1>

          <div style={{ marginBottom: "15px" }}>
            <a href='https://m.facebook.com/ElroyHullana23/' target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/facebook.png"
                alt="Facebook"
                style={{ width: "40px", marginRight: "10px" }}
              />
            </a>

            <a href='https://www.instagram.com/elroy23hullana/?hl=en' target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/instagram.png"
                alt="Instagram"
                style={{ width: "40px", marginRight: "10px" }}
              />
            </a>

            <a href='https://www.linkedin.com/in/elroyhullana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin.png"
                alt="LinkedIn"
                style={{ width: "40px", marginRight: "10px" }}
              />
            </a>

            <a href='mailto:hullanader23@gmail.com'>
              <img
                src="/icons/gmail-logo.png"
                alt="Gmail"
                style={{ width: "40px" }}
              />
            </a>
          </div>

          <button
            onClick={handleCloseDialog}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#DE9E48",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </Dialog>
    </ThemeProvider>
  );
};

export default Navbar;
