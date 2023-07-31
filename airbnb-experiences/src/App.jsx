import "./App.css";
import CardComponent from "./components/CardComponent";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import data from "./data.jsx";

function App() {
  const cards = data.map((item) => {
    return (
      <CardComponent
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="card-list">
      {cards}
      </div>
    </>
  );
}

export default App;
