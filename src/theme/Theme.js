import { createTheme, useTheme } from "@mui/material/styles";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BACKGROUND_COLOR,
  // ICON_SIZE,
  COLORS,
  FONT_SIZE,
  SCROLL_BAR_THEME,
  FONT_FAMILY,
  PADDINGS,
} from "./Defaults";

const cardTablePadding = "0.25rem 2.25rem 0.25rem 2.25rem";
const cardTableBorderradius = 5;
const columnWidthBig = "150px";
const columnWidthSmall = "75px";
const tableBorder = "1px";

export const LIGHT_THEME = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: [
          SCROLL_BAR_THEME,
          {
            position: "relative",
            minHeight: "100vh",
            margin: 0,
            // webkitFontSmoothing: antialiased;
            // -moz-osx-font-smoothing: grayscale;
          },
        ],
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR.mainLight,
    },
    secondary: {
      main: SECONDARY_COLOR.mainLight,
    },
    background: {
      default: BACKGROUND_COLOR.backgroundColorLight,
      paper: BACKGROUND_COLOR.paperColorLight,
    },
  },
  typography: {
    fontFamily: "Noto Sans",
    fontSize: 13,
  },
});

export const DARK_THEME = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: [
          SCROLL_BAR_THEME,
          {
            position: "relative",
            minHeight: "100vh",
            margin: 0,
            // webkitFontSmoothing: antialiased;
            // -moz-osx-font-smoothing: grayscale;
          },
        ],
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR.mainDark,
    },
    secondary: {
      main: SECONDARY_COLOR.mainDark,
    },
    background: {
      default: BACKGROUND_COLOR.backgroundColorDark,
      paper: BACKGROUND_COLOR.paperColorDark,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY.name,
    fontSize: 12,
  },
});

export const CommonStylesFunction = () => {
  const theme = useTheme();
  let darkMode = theme.palette.mode === "dark";
  return {
    primaryName: {
      fontSize: FONT_SIZE.big,
      fontWeight: "bold",
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    secondaryName: {
      fontSize: FONT_SIZE.small,
      fontWeight: "400",
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    tertiaryName: {
      fontSize: FONT_SIZE.small,
      fontWeight: "400",
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    IconBig: {
      height: "100%",
      width: "100%",
      maxWidth: "500px",
    },
    link: {
      textDecoration: "none",
    },
    divCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: 8,
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    middleDiv: {
      [theme.breakpoints.only("sm")]: {
        marginTop: 75,
      },
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    buttonCommon: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      width: 150,
      "&:hover": {
        background: theme.palette.secondary.main,
      },
    },
    tabAppBar: {
      boxShadow: "none",
      borderBottom: `${tableBorder} solid ${COLORS.lineColorLight}`,
    },
    tabBG: {
      bgcolor: "background.paper",
    },
  };
};

export const HeaderViewStylesFunction = () => {
  // const theme=useTheme();
  const COMMON_STYLES = CommonStylesFunction();
  return {
    ...COMMON_STYLES,
    appBar: {
      boxShadow: "none",
      borderBottom: "1px solid #E5E5E5",
    },
    toolBar: {
      mr: 2,
      display: { xs: "none", md: "flex" },
    },
    headerLogo: {
      width: "100%",
      height: "100%",
      maxWidth: 65,
    },
    menuOptionsStyleMobile: {
      flexGrow: 1,
      display: { xs: "flex", md: "none" },
    },
    menuOptionsStyleDesktop: {
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
    },
    menuPage: {
      display: { xs: "block", md: "none" },
    },
  };
};

export const TableViewStylesFunction = () => {
  const theme = useTheme();
  let darkMode = theme.palette.mode === "dark";
  const COMMON_STYLES = CommonStylesFunction();
  return {
    ...COMMON_STYLES,
    tableStickyColumn: {
      color: theme.palette.common.white,
      left: 0,
      right: 0,
      position: "sticky",
      // zIndex: theme.zIndex.appBar + 2
      zIndex: 100,
    },
    tablePadding: {
      padding: PADDINGS.small,
      borderBottom: `${tableBorder} solid ${COLORS.lineColorLight}`,
      width: columnWidthBig,
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    tablePaddingIcons: {
      padding: PADDINGS.small,
      borderBottom: `${tableBorder} solid ${COLORS.lineColorLight}`,
      width: columnWidthSmall,
      color: darkMode ? COLORS.fontColorLight : COLORS.fontColorDark,
    },
    green: {
      backgroundColor: COLORS.success,
      color: COLORS.fontColorLight,
      borderRadius: cardTableBorderradius,
      padding: cardTablePadding,
    },
    red: {
      backgroundColor: COLORS.error,
      color: COLORS.fontColorLight,
      borderRadius: cardTableBorderradius,
      padding: cardTablePadding,
    },
    blue: {
      backgroundColor: COLORS.info,
      color: COLORS.fontColorLight,
      borderRadius: cardTableBorderradius,
      padding: cardTablePadding,
    },
    grey: {
      backgroundColor: COLORS.none,
      color: COLORS.fontColorDark,
      borderRadius: cardTableBorderradius,
      padding: cardTablePadding,
    },
    yellow: {
      backgroundColor: COLORS.warning,
      color: COLORS.fontColorLight,
      borderRadius: cardTableBorderradius,
      padding: cardTablePadding,
    },
    iconsContainer: {
      border: `${tableBorder} solid ${COLORS.lineColorLight}`,
      width: columnWidthSmall,
      padding: PADDINGS.small,
    },
    iconColors: {
      color: darkMode ? COLORS.iconColorLight : COLORS.iconColorMixed,
    },
    namePadding: {
      padding: `0rem ${PADDINGS.smallBig}`,
    },
    nameColumn: {
      borderRight: `${tableBorder} solid ${COLORS.lineColorLight}`,
      padding: PADDINGS.small,
      width: columnWidthBig,
    },
    datePadding: {
      paddingTop: PADDINGS.big,
      //  paddingBottom: PADDINGS.mediumBig,
    },
    accordionStyle: {
      border: `${tableBorder} solid ${COLORS.lineColorLight}`,
      margin: 0,
      marginBottom: PADDINGS.small,
      boxShadow: 0,
    },
    accordionHeading: {
      width: "33%",
      flexShrink: 0,
      fontWeight: "bold",
      color: darkMode ? COLORS.iconColorLight : COLORS.iconColorMixed,
    },
    accordionCollapseIcon: {
      color: darkMode ? COLORS.iconColorLight : COLORS.iconColorMixed,
    },
    defaultTableContainer: {
      maxHeight: "calc(98vh - 67px)",
    },
    popupTableContainer: {
      maxHeight: "calc(98vh - 235px)",
    },
    tableMinWidh: {
      minWidth: 650,
    },
    tablePopupWidth: {
      position: "fixed",
      width: "78.5%",
      top: 175,
    },
    tableTopView: {
      position: "sticky",
      top: 50,
      bottom: 0,
      zIndex: 120,
      background: darkMode ? "#0f2027" : "#F9FBFC",
    },
  };
};
