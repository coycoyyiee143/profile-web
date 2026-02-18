import React from "react";

function Skills() {
  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">My Skills</h1>
      <div className="row g-4">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2">
            <div className="card p-3 text-center shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <img
                src={skill.logo}
                alt={skill.name}
                style={{ width: "50px", height: "50px", marginBottom: "10px" }}
              />
              <h6 className="mb-0">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
