const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>
          velit maiores facere! Quo! Minima, quidem esse voluptatem veritatis
          asperiores quo, sit corporis placeat commod
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img
              className="icon"
              src="https://th.bing.com/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAAAAA?rs=1&pid=ImgDetMain"
              alt="icon"
            />
            <img
              className="icon"
              src="https://www.vectorico.com/wp-content/uploads/2018/11/amazon-icon.png"
              alt="icon"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          className="shoes"
          src="https://th.bing.com/th/id/OIP.7UaM0_ayvUPsbV5vAiqjuwHaEK?rs=1&pid=ImgDetMain"
          alt="shoes-pic"
        />
      </div>
    </main>
  );
};
export default HeroSection;
