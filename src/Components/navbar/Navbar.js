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

import NavbarDrawer from "../navbar/NavbarDrawer";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [value, setValue] = useState(activeTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#333333" }} position="static">
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
                    color: "#FFD300",
                  },
                  "&.Mui-selected": {
                    textTransform: "capitalize",
                    color: "#FFD300",
                  },
                }}
              />

              <a
                href="#bio"
                onClick={(e) => scrollToSection(e, 'bio')}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Tab
                  label={"ABOUT"}
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    marginRight: "20px",

                    "&:hover": {
                      color: "#FFD300",
                    },
                    "&.Mui-selected": {
                      textTransform: "capitalize",
                      color: "#FFD300",
                    },
                  }}
                />
              </a>

              <a
                href="#bodyContent"
                onClick={(e) => scrollToSection(e, 'bodyContent')}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Tab
                  label={"RECENT WORKS"}
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    marginRight: "20px",

                    "&:hover": {
                      color: "#FFD300",
                    },
                    "&.Mui-selected": {
                      textTransform: "capitalize",
                      color: "#FFD300",
                    },
                  }}
                />
              </a>

              <a
                href="#contactMeArea"
                onClick={(e) => scrollToSection(e, 'contactMeArea')}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Tab
                  label={"CONTACT"}
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
              </a>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
