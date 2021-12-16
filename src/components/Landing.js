import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingContainer">
      <h1>Plan & Save Your Scuba Dives With Us!</h1>
      <h2>
        It's important to always plan your scuba dives in advance, so bring a buddy and...
      </h2>
      <Link to="/divePlan">
        <p className="button">Let's Dive!</p>
      </Link>
    </div>
  );
}

export default Landing;
