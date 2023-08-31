import { Link } from "react-router-dom";
import { ArrowBackIosNew, CameraAlt } from "@mui/icons-material";
import "./EditProfile.css";

const EditProfile = () => {
  return (
    <>
      <div className="top">
        <Link to={"/user"}>
          <ArrowBackIosNew sx={{ fontSize: `1rem` }} /> Back
        </Link>
      </div>
      <div className="wrapper">
        <div className="info">
          <h3>Change Info</h3>
          <p>Changes will be reflected in all services</p>
        </div>
        <div className="photo-section">
          <div className="photo">
            <img src="/profile.png" />
            <CameraAlt />
          </div>
          <button>Change photo</button>
        </div>
        <label htmlFor="name">
          Name
          <input
            type="Text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            autoComplete="off"
          />
        </label>
        <label htmlFor="bio">
          Bio
          <input
            type="Text"
            id="bio"
            name="bio"
            placeholder="Enter your Bio..."
            autoComplete="off"
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="Text"
            id="phone"
            name="phone"
            placeholder="Enter your phone..."
            autoComplete="off"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="Text"
            id="password"
            name="password"
            placeholder="Enter your password..."
            autoComplete="off"
          />
        </label>
        <button>Save</button>
      </div>
    </>
  );
};
export default EditProfile;
