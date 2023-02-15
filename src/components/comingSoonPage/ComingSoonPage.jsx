import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CommonStylesFunction } from "../../theme/Theme";
import comingSoon from "../../images/comingSoon.svg";

function ComingSoonPage(props) {
  const themeVariable = useTheme();
  const commonStyles = CommonStylesFunction(themeVariable);

  return (
    <div>
      <div style={commonStyles.middleDiv}>
        <div style={commonStyles.divCenter}>
          <img src={comingSoon} alt="comingSoon" style={commonStyles.IconBig} />
        </div>

        <div style={commonStyles.divCenter}>
          <div>
            <Typography variant="h6" gutterBottom>
              Coming Soon
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              The requested page is in development
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
        <div style={commonStyles.divCenter}>
          <Link to="/Logout" style={commonStyles.link}>
            <Button
              variant="contained"
              color="primary"
              sx={commonStyles.buttonCommon}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
