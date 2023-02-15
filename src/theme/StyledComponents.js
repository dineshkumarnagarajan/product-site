import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
export const ItemWithHeight = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "calc(98vh - 67px)",
  overflowY: "auto",
}));
export const ItemWithOutHeight = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
