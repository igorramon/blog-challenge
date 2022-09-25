import {
  styled,
  Typography,
  Box,
  LinearProgress,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export const ContainerPost = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin-top: 40px;
`;

export const TitlePost = styled(Typography)`
  color: #fff;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 24px;
`;

export const BodyPost = styled(Typography)`
  color: #e1e1e6;
  margin-top: 32px;
  font-weight: 400;
  font-size: 18px;
`;

export const Loading = styled(LinearProgress)`
  background: #eba417;
  color: #000;
  border-radius: 5px;
  height: 1px;
`;

export const InfoAuthor = styled(Typography)`
  color: #a8a8b3;
  font-weight: 400;
  font-size: 13px;
`;

export const CommentTitle = styled(Typography)`
  color: #fff;
  font-weight: 500;
  font-size: 25px;
  margin-top: 64px;
`;

export const ButtonDelete = styled(DeleteIcon)`
  color: #ff6961;
  font-size: 20px;
`;

export const ButtonEdit = styled(ModeEditOutlineOutlinedIcon)`
  color: #333;
  font-size: 20px;
`;

export const ButtonLink = styled(OpenInNewOutlinedIcon)`
  color: #333;
  font-size: 20px;
`;

export const TooltipButton = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
