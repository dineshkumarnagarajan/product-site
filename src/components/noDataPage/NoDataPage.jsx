import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CommonStylesFunction } from "../../theme/Theme";
import Error400 from "../../images/400.svg";

function NoDataPage(props) {
  const themeVariable = useTheme();
  const commonStyles = CommonStylesFunction(themeVariable);

  return (
    <div>
      <div style={commonStyles.middleDiv}>
        <div style={commonStyles.divCenter}>
          <img src={Error400} alt="Error400" style={commonStyles.IconBig} />
        </div>

        <div style={commonStyles.divCenter}>
          <div>
            <Typography variant="h6" gutterBottom>
              There was an error, please try again later
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              The server encountered an internal error and was not able to
              complete your request
            </Typography>
          </div>
        </div>
        <div style={commonStyles.divCenter}>
          <Link to="/" style={commonStyles.link}>
            <Button
              variant="contained"
              color="primary"
              sx={commonStyles.buttonCommon}
            >
              REFRESH PAGE
            </Button>
          </Link>
        </div>
        {/* <div className={classes.divCenter}>
              <Link to="/Logout" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonCommon}
                >
                  Logout
                </Button>
              </Link>
            </div> */}
      </div>
    </div>
  );
}

export default NoDataPage;
