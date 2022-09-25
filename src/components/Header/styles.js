import { styled, AppBar } from "@mui/material";
import { Link } from "react-router-dom";

export const AppBarContainer = styled(AppBar)`
  background: #121414;
  border-bottom: 1px solid #29292e;
`;

export const LinkMenu = styled(Link)`
  text-transform: none;
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
  :hover {
    color: #eba417;
    cursor: pointer;
  }
`;
