function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

     <div className="hero-glow-left"></div>

     <div className="hero-glow-right"></div>
     <div className="hero-content">

        <span className="hero-tag">
          LEARN • BUILD • SUCCEED
        </span>

        <h1>
          Build Your Tech Career
          <br />
          with Core Edge Academy
        </h1>

        <p>
          Learn from industry experts, work on live projects,
          and get placement assistance with top companies.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => {
            document.getElementById("courses")?.scrollIntoView({
            behavior: "smooth",
            });
            }}
            >
            Explore Courses
          </button>
          <button>Book Free Demo</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;