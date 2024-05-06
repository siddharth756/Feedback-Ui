import Header from "./components/Header.jsx";
import "./App.css";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStatus from "./components/FeedbackStatus.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutLinkIcon from "./components/AboutLinkIcon.jsx";
import AboutPage from "./components/AboutPage.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStatus />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLinkIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
