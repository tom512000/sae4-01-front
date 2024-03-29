import React from "react";
import { Link } from "wouter";

function NotFound() {
  return (
    <div>
      <h1>Page non trouvée</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
