import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to="/" className="AboutPageLink">Back to Home</Link>
    </div>
  );
};

export default AboutPage;
