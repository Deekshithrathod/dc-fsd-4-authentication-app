import Card from "../../components/Card/Card";
import Form from "../../components/Card/Form/Form";
import Heading from "../../components/Card/Heading/Heading";
import Logo from "../../components/Card/Logo/Logo";
import OAuthLogin from "../../components/Card/OAuthLogin/OAuthLogin";
import ReRoute from "../../components/Card/ReRoute/ReRoute";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <Card>
        <Logo />
        <Heading
          title="Join thousands of learners from around the world"
          subTitle="Master web development by making real-life projects. There are multiple
        paths for you to choose"
        />
        <Form />
        <OAuthLogin />
        <ReRoute route="login" />
      </Card>
    </div>
  );
};
export default Register;
