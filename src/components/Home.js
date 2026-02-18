import React from "react";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center p-5 bg-light rounded shadow">
        <img
          src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-1/89902549_2819297181491427_4252794805962145792_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGmN_mh63QB2T8bAJwVrjd6buFmFJHcNixu4WYUkdw2LKV__oqdKz1kg6dOJ6D167spx3E98x8Qb6b2fMTh05q4&_nc_ohc=ultCqx-ylfsQ7kNvwFE_U-k&_nc_oc=AdmxOnFf0YwNPnSZ58FP7Kgo3i1HHw-dJwCLsDQxTYyCQVI5-GsumIsfGx_tk2BFDpc&_nc_zt=24&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=7fCK4WdHLu2rTiA1Zghe2w&oh=00_AfuWavKJyhDD_FREEroYp3k560HIiwCo-3cMefbYVKaY8g&oe=69BCC9CF"
          alt="Profile"
          className="rounded-circle mb-4"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

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
