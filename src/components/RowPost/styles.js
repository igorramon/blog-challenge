import { styled, ListItem, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const WrapperList = styled(ListItem)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin-top: 40px;
`;

export const NameAuthor = styled(Typography)`
  color: #a8a8b3;
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const TitleItemList = styled(Link)`
  font-family: Roboto;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  :hover {
    color: #eba417;
    cursor: pointer;
  }
  margin-bottom: 8px;
`;

export const SubTitle = styled(Typography)`
  width: 100%;
  color: #a8a8b3;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DividerItem = styled(Divider)`
  background: #323238;
`;
