const PRIMARY_COLOR = {
    mainLight: "#FFFFFF",
    mainDark: "#000",
  };
  const SECONDARY_COLOR = {
    mainLight: "#DF6420",
    mainDark: "#DF6420",
  };
  const BACKGROUND_COLOR = {
    backgroundColorLight: "#F9FBFC",
    paperColorLight: "#fff",
    backgroundColorDark: "#0f2027",
    paperColorDark: "#2d3035",
  };
  const COLORS = {
    lineColorLight: "#E5E5E5",
    lineColorDark: "#E5E5E5",
    fontColorLight: "#FFF",
    fontColorDark: "#000",
    iconColorLight: "#FFF",
    iconColorDark: "#000",
    iconColorMixed: "#072D5A",
    success: "#70AD47",
    error: "#FF0000",
    info: "#0000FF",
    warning: "#FFC000",
    none: "#F2F2F2",
  };
  const ICON_SIZE = {
    small: "1.1rem", //(18 px)
    medium: "1.5rem", //(24 px)
    big: "2rem", //(32 px)
  };
  const FONT_SIZE = {
    verySmall: "0.6rem", //(10 px)
    small: "0.8rem", //(12 px)
    medium: "0.9rem", //(14 px)
    big: "1rem", //(16 px)
    mediumBig: "1.1rem", //(18 px)
    veryBig: "1.5rem", //(24 px)
  };
  const FONT_FAMILY = {
    name: "Noto Sans",
  };
  const PADDINGS = {
    verySmall: "0.06rem", //(1 px)
    small: "0.3rem", //(4px)
    medium: "0.4rem", //( 6 px)
    smallBig: "0.5rem", //(8 px)
    mediumBig: "0.6rem", //(10 px)
    big: "1rem", //(16px)
    veryBig: "1.5rem", //(24 px)
  };
  const SCROLL_BAR_THEME = {
    scrollbarColor: "#cfcfcf42 #cfcfcf42",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
      backgroundColor: "#cfcfcf42",
      width: "0.5em",
      height: "0.5em",
      //  display: 'none'
    },
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
      borderRadius: 8,
      backgroundColor: "#b0b0b042",
      minHeight: "0.5em",
      border: "1px solid #cfcfcf42",
    },
    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
      backgroundColor: "#cfcfcf42",
    },
    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
      backgroundColor: "#cfcfcf42",
    },
    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#cfcfcf42",
    },
    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
      backgroundColor: "#cfcfcf42",
    },
  };
  
  export {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    BACKGROUND_COLOR,
    ICON_SIZE,
    FONT_SIZE,
    SCROLL_BAR_THEME,
    COLORS,
    FONT_FAMILY,
    PADDINGS,
  };
  