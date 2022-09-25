import React, { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import { AppBarContainer, LinkMenu } from "./styles";
import { config } from "./config";

export const Header = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleRoute = (route) => {
    history.push(`${route}`);
  };

  return (
    <div>
      <AppBarContainer position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#eba417",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                color: "#eba417",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",

                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={() => handleRoute("/")}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {config.pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleRoute(page.to)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "#eba417",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                color: "#eba417",
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",

                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {config.pages.map((page) => (
                <LinkMenu to={page.to}>
                  <Typography textAlign="center">{page.name}</Typography>
                </LinkMenu>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBarContainer>
    </div>
  );
};
