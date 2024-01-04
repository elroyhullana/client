import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";

const pages = [
  { label: "Recent Works", link: "/recentworks", color: "#372C2E" },
  { label: "Contact", link: "/contact", color: "#372C2E" },
];

const linkStyle = {
  textDecoration: "none",
  color: "#372C2E",
};

const textStyle = {
  fontSize: "14px",
  fontStyle: "normal",
};

const imageStyle = {
  height: "auto",
  width: "200px",
};

const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ margin: "20px" }}
      >
        <List style={{ backgroundColor: "#DE9E48", height: "100%" }}>
          <img src="/Images/HULLANA-yellowbg.png" alt="headerLogo" style={imageStyle} />

          {pages.map((page, index) => (
            <ListItem onClick={() => setOpenDrawer(false)} key={index}>
              {page.label === "Contact" ? (
                <ListItemText primary={page.label} onClick={handleOpenDialog} style={{ textStyle }} />
              ) : (
                <a href={page.link} style={{ ...linkStyle }}>
                  <ListItemText primary={page.label} style={{ textStyle }} />
                </a>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

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

      <IconButton
        sx={{ color: "#DE9E48", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default NavbarDrawer;
