import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Plan & Save your scuba dives with us!</h1>
      <h2>
        It's so important to plan your scuba dives, so bring a buddy and...
      </h2>
      <Link to="/divePlan">
        <p className="button">Let's Dive!</p>
      </Link>
    </div>
  );
}

export default Landing;
