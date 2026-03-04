import "./Home.css";
import { PROFILECARD } from "./Profile";
import { PROJECTS } from "./Projects";

export function HOME() {
  return (
    <div className="home-container">

      {/* LEFT SIDE */}
      <div className="home-left">
        <PROFILECARD />
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">

        <section className="intro">
          <h1>CS STUDENT</h1>
          <h2>AI / ML BUILDER</h2>

          <p>
            Computer Science student specializing in AI & Machine Learning.
            Building intelligent applications using MERN stack, PostgreSQL,
            and scalable backend systems while exploring real-world AI projects.
          </p>
        </section>

        <div className="stats">
          <div>
            <h3>02+</h3>
            <span>PROJECTS BUILT</span>
          </div>

          <div>
            <h3>MERN</h3>
            <span>STACK FOCUSED</span>
          </div>

          <div>
            <h3>AI</h3>
            <span>PROJECTS</span>
          </div>
        </div>

        <PROJECTS />

      </div>
    </div>
  );
}