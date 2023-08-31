import Footer from "../Footer/Footer";
import "./Card.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card">
      <div className="card-main">{children}</div>
      <Footer />
    </div>
  );
};
export default Card;
