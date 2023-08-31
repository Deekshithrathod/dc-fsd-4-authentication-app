import Card from "../../components/Card/Card";
import Form from "../../components/Card/Form/Form";
import Heading from "../../components/Card/Heading/Heading";
import Logo from "../../components/Card/Logo/Logo";
import OAuthLogin from "../../components/Card/OAuthLogin/OAuthLogin";
import ReRoute from "../../components/Card/ReRoute/ReRoute";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Card>
        <Logo />
        <Heading title="Join thousands of learners from around the world" />
        <Form />
        <OAuthLogin />
        <ReRoute route="register" />
      </Card>
    </div>
  );
};
export default Login;
