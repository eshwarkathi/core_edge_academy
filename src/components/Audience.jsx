function Audience() {
  const audience = [
    {
      title: "Freshers & Students",
      icon: "🎓",
      desc: "Perfect for graduates and students who want to start their IT career with industry-ready skills.",
    },
    {
      title: "Working Professionals",
      icon: "💼",
      desc: "Upskill into AI, Cloud, DevOps, Testing or Full Stack without leaving your current job.",
    },
    {
      title: "Career Switchers",
      icon: "🚀",
      desc: "Switch from a non-IT background into software with structured training and placement support.",
    },
  ];

  return (
    <section className="section" id="audience">
      <div className="sec-head">

        <p className="eyebrow">~/who-its-for</p>

        <h2>Who Can Join?</h2>

        <p className="sec-sub">
          No matter where you are in your career, we have the right learning path.
        </p>

      </div>

      <div className="aud-grid">

        {audience.map((item, index) => (

          <div className="aud" key={index}>

            <div
              style={{
                fontSize: "55px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Audience;