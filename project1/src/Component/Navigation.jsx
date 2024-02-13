const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          className="image"
          src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"
          alt="logo"
        />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">about</li>
        <li href="#">contact</li>
      </ul>
      <button>login</button>
    </nav>
  );
};
export default Navigation;
