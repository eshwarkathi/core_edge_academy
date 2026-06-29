function WhyUs() {

  const features = [
    {
      title: "100% Practical Training",
      icon: "💻",
      desc: "Hands-on sessions with real-time projects."
    },
    {
      title: "Live Projects",
      icon: "🚀",
      desc: "Build industry-level projects during training."
    },
    {
      title: "Mock Interviews",
      icon: "🎤",
      desc: "Weekly HR & Technical interview practice."
    },
    {
      title: "Resume Building",
      icon: "📄",
      desc: "Professional ATS-friendly resume preparation."
    },
    {
      title: "Placement Assistance",
      icon: "🎯",
      desc: "Interview scheduling and placement support."
    },
    {
      title: "Industry Experts",
      icon: "👨‍🏫",
      desc: "Learn from experienced IT professionals."
    }
  ];

  return (
    <section className="section" id="why">

      <div className="sec-head">

        <p className="eyebrow">
          ~/why-core-edge
        </p>

        <h2>
          Why Choose Core Edge Academy?
        </h2>

        <p className="sec-sub">
          We focus on practical learning, career growth and successful placements.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item) => (

          <div className="why-card" key={item.title}>

            <div className="why-icon">
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

export default WhyUs;