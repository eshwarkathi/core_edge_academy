const ICONS = {
  React: "⚛️",
  "Node.js": "🟢",
  MongoDB: "🍃",
  Express: "🚀",
  JavaScript: "🟨",
  HTML: "🌐",
  CSS: "🎨",
  Git: "🔀",
  GitHub: "🐙",
  Docker: "🐳",
  AWS: "☁️",
  VSCode: "💻",
  Postman: "📮",
  Python: "🐍",
  Java: "☕",
  MySQL: "🗄️",
};

function CourseTools({ tools = [] }) {
  return (
    <section className="tools-section">

      <div className="section-title">

        <span>Technologies</span>

        <h2>Tools You'll Master</h2>

      </div>

      <div className="tools-grid">

        {tools.map((tool) => (

          <div className="tool-card" key={tool}>

            <div className="tool-icon">

              {ICONS[tool] || "💡"}

            </div>

            <h3>{tool}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CourseTools;