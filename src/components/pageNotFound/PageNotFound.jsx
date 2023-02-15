import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CommonStylesFunction } from "../../theme/Theme";
import Error404 from "../../images/404.svg";

function PageNotFound(props) {
  const themeVariable = useTheme();
  const commonStyles = CommonStylesFunction(themeVariable);

  return (
    <div>
      <div style={commonStyles.middleDiv}>
        <div style={commonStyles.divCenter}>
          <img src={Error404} alt="Error404" style={commonStyles.IconBig} />
        </div>

        <div style={commonStyles.divCenter}>
          <div>
            <Typography variant="h6" gutterBottom>
              The page you were looking for doesn't exist.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              It's on us, we moved the content to a different page
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
              TAKE ME HOME
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

export default PageNotFound;
