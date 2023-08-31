import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="heading">
        <h1>Personal info</h1>
        <p>Basic info, like your name and photo</p>
      </div>
      <div className="user-info">
        <div className="disclaimer">
          <div className="info">
            <h3>Profile</h3>
            <p>Some info might be visible to other people</p>
          </div>
          <Link to={"/user/edit"}>
            <button>Edit</button>
          </Link>
        </div>
        <div className="user-info-item">
          <div className="property">Photo</div>
          <div className="value photo">
            <img src="profile.png" />
          </div>
        </div>
        <div className="user-info-item">
          <div className="property">Name</div>
          <div className="value">Xanthe Neal</div>
        </div>
        <div className="user-info-item">
          <div className="property">Bio</div>
          <div className="value">
            I am a software developer and a big fan of devchallenges dfsasdfasdf
            asfdsa afa fasf as fas fasd fadsf asd fasd sad afsddasf
          </div>
        </div>
        <div className="user-info-item">
          <div className="property">Phone</div>
          <div className="value">908249274292</div>
        </div>
        <div className="user-info-item">
          <div className="property">Email</div>
          <div className="value">xanthe.neal@gmail.com</div>
        </div>
        <div className="user-info-item">
          <div className="property">password</div>
          <div className="value">************</div>
        </div>
        <div className="user-info-item">
          <div className="property">Name</div>
          <div className="value">Xanthe Neal</div>
        </div>
      </div>
    </>
  );
};
export default Home;
