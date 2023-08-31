import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="input-container">
        <EmailIcon />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-container">
        <LockIcon />
        <input type="password" placeholder="Password" />
      </div>
      <button>Start coding now</button>
    </div>
  );
};
export default Form;
