import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

import {
  AddBoxOutlined,
  ArrowForwardIosOutlined,
  FileCopyOutlined,
  Forward10Outlined,
  Help,
  HelpOutline,
  HomeOutlined,
  InboxOutlined,
  LoginOutlined,
  MapOutlined,
  NextPlanOutlined,
  Person2Outlined,
  Person3Outlined,
  PieChartOutline,
  Search,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import theme from "../theme";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  let location = useLocation();
  const navMain = [
    {
      icon: (
        <HomeOutlined
          sx={{
            color: location.pathname === "/" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Home",
      path: "/",
    },
    {
      icon: (
        <AddBoxOutlined
          sx={{
            color: location.pathname === "/order" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Order",
      path: "/order",
    },
    {
      icon: (
        <FileCopyOutlined
          sx={{
            color:
              location.pathname === "/documentation"
                ? "primary"
                : "text.primary",
          }}
        />
      ),
      text: "Documentation",
      path: "/documentation",
    },
    {
      icon: (
        <MapOutlined
          sx={{
            color: location.pathname === "/map" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Map Overview",
      path: "/map",
    },
    {
      icon: (
        <PieChartOutline
          sx={{
            color:
              location.pathname === "/statics" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Statics",
      path: "/statics",
    },
  ];
  const communicationNav = [
    {
      icon: (
        <InboxOutlined
          sx={{
            color: location.pathname === "/inbox" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Inbox",
      path: "/inbox",
    },
    {
      icon: (
        <Person3Outlined
          sx={{
            color:
              location.pathname === "/couriers" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Couriers",
      path: "/couriers",
    },
  ];
  const navhelp = [
    {
      icon: (
        <SettingsOutlined
          sx={{
            color:
              location.pathname === "/settings" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Settings",
      path: "/settings",
    },
    {
      icon: (
        <HelpOutline
          sx={{
            color: location.pathname === "/help" ? "primary" : "text.primary",
          }}
        />
      ),
      text: "Help",
      path: "/help",
    },
  ];
  const matches = useMediaQuery("(min-width:600px)");

  const [isClicked, setIsClicked] = useState(matches);
  useEffect(() => {
    setIsClicked(matches);
  }, [matches]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.nav
      variants={navCom}
      animate={isClicked ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    >
      <Paper
        variant="outlined"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: isClicked ? 240 : 50, // Toggle width based on state
          transition: "width 0.3s ease",
        }}
      >
        <div className="mt-11">
          <div
            style={{ backgroundColor: "#012E65" }}
            className="flex items-center mx-2 relative "
          >
            <img
              className="h-8"
              src={isClicked ? "icons/logowide.svg" : "icons/logosmall.jpg"}
            />

            <IconButton
              onClick={handleClick}
              color="primary.main"
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "-40px",
                backgroundColor: "#f1f3ff ",
              }}
            >
              <ArrowForwardIosOutlined />
            </IconButton>
          </div>

          <TextField
            id="input-with-sx"
            placeholder="Search Package"
            variant="standard"
            size="small"
            sx={{
              mt: "16px",
              mb: "32px",
              px: 1,
              "& .MuiInputBase-root": {
                backgroundColor: "#f1f3ff",
                border: "none",
                borderRadius: 1,
                height: "40px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          {isClicked && (
            <Typography
              color={"text.secondary"}
              sx={{ px: 1 }}
              variant="subtitle2"
              fontSize={16}
            >
              Main
            </Typography>
          )}
          {navMain.map((item) => (
            <ListItem
              sx={{
                height: "40px",
                my: 1,
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.action.selected
                    : "transparent",
              }}
              disablePadding
            >
              <Link
                a
                style={{
                  width: "100%",
                  padding: 1,
                }}
                to={item.path}
              >
                <ListItemButton sx={{ px: 1 }}>
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <AnimatePresence>
                    {isClicked ? (
                      <motion.div
                        key={isClicked}
                        initial={"enter"}
                        animate={"in"}
                        exit={"exit"}
                        variants={navTextAni}
                      >
                        <ListItemText
                          sx={{
                            color:
                              location.pathname === item.path
                                ? "primary.main"
                                : "text.primary",
                          }}
                          primary={item.text}
                        />
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          {isClicked && (
            <Typography
              color={"text.secondary"}
              sx={{ px: 1 }}
              variant="subtitle2"
              mt={3}
              fontSize={16}
            >
              Communication
            </Typography>
          )}
          {communicationNav.map((item) => (
            <Link to={item.path}>
              <ListItem
                sx={{
                  height: "40px",
                  my: 1,
                }}
                disablePadding
              >
                {" "}
                <ListItemButton sx={{ px: 1 }}>
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <AnimatePresence>
                    {isClicked ? (
                      <motion.div
                        key={isClicked}
                        initial={"enter"}
                        animate={"in"}
                        exit={"exit"}
                        variants={navTextAni}
                      >
                        <ListItemText
                          sx={{
                            color:
                              location.pathname === item.path
                                ? "primary.main"
                                : "text.primary",
                          }}
                          primary={item.text}
                        />
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </div>

        <div>
          {navhelp.map((item) => (
            <Link to={item.path}>
              <ListItem
                sx={{
                  height: "40px",
                  my: 1,
                }}
                disablePadding
              >
                <ListItemButton sx={{ px: 1 }}>
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <AnimatePresence>
                    {isClicked ? (
                      <motion.div
                        key={isClicked}
                        initial={"enter"}
                        animate={"in"}
                        exit={"exit"}
                        variants={navTextAni}
                      >
                        <ListItemText
                          sx={{
                            color:
                              location.pathname === item.path
                                ? "primary.main"
                                : "text.primary",
                          }}
                          primary={item.text}
                        />
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <ListItem sx={{ px: 1 }} disablePadding alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="icons/logosmall.jpg" />
            </ListItemAvatar>
            {isClicked && (
              <>
                <ListItemText
                  sx={{
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                  primary="Lahiru Shiran"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline", fontSize: "12px" }}
                        component="span"
                        color={"text.primary"}
                      >
                        lahirushirandev@gmail.com
                      </Typography>
                    </React.Fragment>
                  }
                  primaryTypographyProps={{
                    style: { fontSize: "14px", fontWeight: 600 },
                  }}
                />
                <ListItemButton sx={{ px: 1 }}>
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    <LoginOutlined />
                  </ListItemIcon>
                </ListItemButton>
              </>
            )}
          </ListItem>
        </div>
      </Paper>
    </motion.nav>
  );
}
const navTextAni = {
  enter: { opacity: 0 },
  in: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0 },
};
const navText = {
  enter: { opacity: 0 },
  in: { display: "block", opacity: 1 },
  exit: { opacity: 0 },
};
const navCom = {
  open: {
    width: 240,
  },
  closed: {
    width: 50,
  },
};
