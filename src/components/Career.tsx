import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern Software Developer</h4>
                <h5>Qualyval</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Working on real-world software development tasks under mentor
              guidance. Assisting in designing, developing, and testing
              application features while applying industry best practices in
              coding and version control.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development & Python Intern</h4>
                <h5>CODTECH IT Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed web development and Python programming internships.
              Gained practical experience building web applications, enhancing
              development skills, and collaborating with a professional team
              over a combined 3-month period.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Cloud Counselage Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Contributed to projects in a cloud-focused environment, gaining
              exposure to modern development workflows and enhancing technical
              skills in a collaborative setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
