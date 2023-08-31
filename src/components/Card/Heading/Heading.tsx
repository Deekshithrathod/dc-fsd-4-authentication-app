import "./Heading.css";

const Heading = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="heading-container">
      <h2 className="title">{title}</h2>
      {subTitle && <p className="sub-title">{subTitle}</p>}
    </div>
  );
};
export default Heading;
