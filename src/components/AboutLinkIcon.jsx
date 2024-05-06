import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutLinkIcon() {
  return (
    <div className="aboutLink">
      <Link to="/about" className="FaQuestionIcon">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutLinkIcon;
