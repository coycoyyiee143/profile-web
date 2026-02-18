import React from "react";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center p-5 bg-light rounded shadow">
        <h1 className="mb-3">Welcome to My Profile!</h1>
        <p className="lead">
          Hello! I am an aspiring full-stack developer passionate about building
          responsive and user-friendly web applications.
        </p>
        <p className="mt-4">
          <a href="#contact" className="btn btn-primary btn-lg">
            Contact Me
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
