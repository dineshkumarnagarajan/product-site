import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Root from "./components/root/Root";
import { LIGHT_THEME, DARK_THEME } from "../src/theme/Theme";

function App() {
  const themeType = useSelector((store) => store.themeType.themeType);

  const validateAndClearLocalStorage = (name, value) => {
    //  localStorage.removeItem(`${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_${process.env.NODE_ENV}_user_details`);
    //  history.push(`/Logout`);
    // localStorage.setItem(name, value);
  };
  React.useEffect(() => {
    let solarNxt_dev_version = JSON.parse(
      localStorage.getItem(
        `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_dev`
      )
    );
    let solarNxt_prod_version = JSON.parse(
      localStorage.getItem(
        `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_prod`
      )
    );
    let devVersion = process.env.REACT_APP_DEPLOYMENT_DEV_VERSION;
    let prodVersion = process.env.REACT_APP_DEPLOYMENT_PROD_VERSION;
    if (
      !Number(solarNxt_dev_version) ||
      Number(solarNxt_dev_version) !== Number(devVersion)
    ) {
      validateAndClearLocalStorage(
        `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_dev`,
        devVersion
      );
    }
    if (
      !Number(solarNxt_prod_version) ||
      Number(solarNxt_prod_version) !== Number(prodVersion)
    ) {
      validateAndClearLocalStorage(
        `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_prod`,
        prodVersion
      );
    }

    let clearReduxPresist =
      process.env.REACT_APP_DEPLOYMENT_CLEAR_REDUX_PRESIST;
    if (clearReduxPresist === true) {
      localStorage.removeItem(
        `persist:${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_${process.env.NODE_ENV}_persist_store`
      );
    }
  }, []);
  return (
    <ThemeProvider theme={themeType === "light" ? LIGHT_THEME : DARK_THEME}>
      <div>
        <Header />
        <CssBaseline />
        <Root />
      </div>
    </ThemeProvider>
  );
}

export default App;
