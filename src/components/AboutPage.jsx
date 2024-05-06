import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <h3>Feedback Ui</h3>
      <p>This is an Feedback Ui app created using ReactJs.</p>
      <p>
        In this is app some functionality is implemented like CRUD operation,
        Form validation, Hooks( useState, useEffect, useContext ), Router, Props
        & state, components etc.
      </p>
      <p>
        This is an just Ui app to test functionality of ReactJs. All data are
        Hardcoded so all data are not modified.
        <p>
          <i>Just for test functionality.</i>
        </p>
      </p>
      <Link to="/" className="AboutPageLink">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
