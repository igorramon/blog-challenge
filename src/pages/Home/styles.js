import {
  styled,
  ListItem,
  List,
  Typography,
  Divider,
  LinearProgress,
} from "@mui/material";

export const ContainerList = styled(List)`
  height: 90px;
  width: 100%;
`;

export const WrapperList = styled(ListItem)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin-top: 40px;
`;

export const TitleItemList = styled(Typography)`
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
  color: #a8a8b3;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const DividerItem = styled(Divider)`
  background: #323238;
`;

export const Loading = styled(LinearProgress)`
  background: #eba417;
  color: #000;
  border-radius: 5px;
  height: 1px;
`;
