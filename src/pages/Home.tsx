import React from "react";

const Home: React.FC = () => {
  return (
    <div className="card hero">
      <div className="row">
        <div className="left">
          <img
            src="/images/profile.jpeg"
            alt="Rahul Sharma"
            className="profile"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="right">
          <h1>Rahul Sharma</h1>
          <p className="muted">
            BCA (Computational Science) — Brainware University (2026)
          </p>
          <p className="muted">Kolkata, West Bengal</p>

          <section>
            <h2>Contact</h2>
            <p>📧 rahul536sharma@gmail.com</p>
            <p>📞 +91 8787465010</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/rahul-sharma-48815b30b/"
                target="_blank"
              >
                rahul-sharma
              </a>
            </p>
          </section>

          <section>
            <h2>Objective</h2>
            <p>
              Seeking an entry-level role to apply my skills in programming,
              database management, and problem-solving across software
              engineering, web development, data science, or IT support.
              Passionate about continuous learning and contributing to a
              collaborative team environment.
            </p>
          </section>
        </div>
      </div>

      <div className="split">
        <section className="info-card">
          <h3>Experience</h3>
          <p>
            <strong>Data Science Intern — Sabudh Foundation</strong> (July 2025)
          </p>
          <ul>
            <li>
              Worked on data cleaning, visualization, and ML model experiments
              using Python, Pandas, NumPy, Matplotlib.
            </li>
            <li>
              Presented insights and collaborated on social-impact projects.
            </li>
          </ul>
        </section>

        <section className="info-card">
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Weather API Integration</strong> — Node.js app fetching &
              displaying weather for a city.
            </li>
          </ul>
        </section>

        <section className="info-card">
          <h3>Education</h3>
          <p>BCA (Computational Science) — Brainware University (2026)</p>
          <p>12th — D A V Nandraj Public School</p>
          <p>10th — RPS Residential School</p>
        </section>

        <section className="info-card">
          <h3>Skills</h3>
          <p>Java, Python, C++, C, Node.js, JavaScript</p>
          <p>Spring Boot, Socket.io, Postman, OpenAI</p>
          <p>Git, GitHub</p>
          <p>MySQL, MongoDB</p>
        </section>

        <section className="info-card">
          <h3>Certifications</h3>
          <p>Data Representation and Visualization — Brainware University</p>
        </section>
      </div>

      <footer className="footer">
        © 2025 Rahul Sharma
      </footer>
    </div>
  );
};

export default Home;
