export default function HeroSection() {
  return (
    <>
      <div className="photo-grid-box">
        <img
          id="photo-grid"
          src="photo-grid.png"
          alt="AirBnB PhotoGrid"
        />
      </div>
      <div className="experience-disp">
        <h1 className="exp-text">
          Online Experiences
        </h1>
        <p className="exp-text-disp">
          Join unique interactive activities led by on-of-a-kind hosts-all without leaving home.
        </p>
      </div>
    </>
  );
}
