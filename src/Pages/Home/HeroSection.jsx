export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yash</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web Developer</span>{" "}
            <br />
            {/* Developer */}
          </h1>
          <p className="hero--section-description">
            
          </p>
        </div>
        <a href="img/Yash Resume.pdf"><button  className="btn btn-primary">Download CV</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/herosection.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
