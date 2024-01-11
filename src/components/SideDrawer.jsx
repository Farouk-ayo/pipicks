import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Collapse, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { suggestionArray } from "../UI/Header/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export const SideDrawer = () => {
  const [openHome, setOpenHome] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const handleClickHome = () => {
    setOpenHome(!openHome);
  };
  const handleClickCat = () => {
    setOpenCat(!openCat);
  };

  const navigate = useNavigate();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          paddingTop: "2rem",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClickHome}>
          <ListItemText primary="Home" />
          {openHome ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHome} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/men");
              }}
            >
              <ListItemText primary="Men" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/women");
              }}
            >
              <ListItemText primary="Women" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/kids");
              }}
            >
              <ListItemText primary="Kids" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickCat}>
          <ListItemText primary="Categories" />
          {openCat ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCat} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            {suggestionArray.map((each) => (
              <ListItemButton key={each.id} sx={{ pl: 4 }} id={each.id}>
                <ListItemIcon>{each.img}</ListItemIcon>
                <ListItemText primary={each.type} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemText
            primary="Login"
            onClick={() => {
              navigate("/login");
            }}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary="Signup"
            onClick={() => {
              navigate("/sign-up");
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleDrawer("left", true)} className="menu">
        <MenuIcon style={{ color: "primary" }} />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </SwipeableDrawer>
    </ThemeProvider>
  );
};
