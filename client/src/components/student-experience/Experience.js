import "../student-experience/Experience.css";

function Experience() {
  return (
    <>
      <div className="student-heading">
        <h2>Students Experience</h2>
      </div>
      {/* Students Experience Section */}
      <section className="students-experience">
        <div className="experience-container">
          <div className="experience-text">
            <p>Guaranteed</p>
            <p> internships of all</p>
            <p>students from first</p>
            <p>year onwards.</p>
          </div>
          <div className="experience-image">
            <img className="img-1" src="/assets/denim-man.png" alt="" />
            <img className="arrow" src="/assets/Arrow 1.png" alt="" />
            <img className="img-2" src="/assets/empty-image.png" alt="" />
            <img className="img-3" src="/assets/curly-hair-girl.png" alt="" />
            <img className="img-4" src="/assets/professional-girl.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;