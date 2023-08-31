import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./OAuthLogin.css";

const OAuthLogin = () => {
  const socialIconStyle = {
    borderRadius: `50%`,
    border: `1px solid #828282`,
  };

  return (
    <div className="oauth-container">
      <p>or continue with these social profile</p>
      <div className="socials">
        <IconButton sx={socialIconStyle}>
          <GoogleIcon />
        </IconButton>
        <IconButton sx={socialIconStyle}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={socialIconStyle}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={socialIconStyle}>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default OAuthLogin;
