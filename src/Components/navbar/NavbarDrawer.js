import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { label: "About", link: "#bio", color: "#333333" },
  { label: "Recent Works", link: "#bodyContent", color: "#333333" },
  { label: "Contact", link: "#contactMeArea", color: "#333333" },
];

const linkStyle = {
  textDecoration: "none",
  color: "#333333",
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

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ margin: "20px" }}
      >
        <List style={{ backgroundColor: "#FFD300", height: "100%" }}>
          <img src="/Images/HULLANA-yellowbg.png" alt="headerLogo" style={imageStyle} />

          {pages.map((page, index) => (
            <ListItem onClick={() => setOpenDrawer(false)} key={index}>
              <a href={page.link} style={{ ...linkStyle }}>
                <ListItemText primary={page.label} style={{ textStyle }} />
              </a>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "#FFD300", justifyContent: "right" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default NavbarDrawer;
