import { Link } from "react-router-dom";
import "./ReRoute.css";

const ReRoute = ({ route }: { route: "login" | "register" }) => {
  return route === "login" ? (
    <p className="re-route">
      Already a member?
      <Link to="/login"> Login</Link>
    </p>
  ) : (
    <p className="re-route">
      Don't have an account yet?
      <Link to="/register"> Register</Link>
    </p>
  );
};
export default ReRoute;
