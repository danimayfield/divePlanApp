import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingContainer wrapper">
      <h1>Plan & Save Your Scuba Dives With Us!</h1>
      <h3>
        It's important to always plan your scuba dives in advance, so bring a buddy and...
      </h3>
      <Link to="/divePlan">
        <p className="button buttonWidth">Let's Dive!</p>
      </Link>
    </div>
  );
}

export default Landing;
