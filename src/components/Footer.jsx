import React from "react";

const Footer = () => {
  const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "#22878c",
  color: "white",
  textAlign: "center"
  };
  return (
    <footer className="container">
      <nav
        className="navbar fixed-bottom stickyFooter navbar-expand-lg"
        style={footerStyle}
      >
        <div className="navbar-brand">© 2020 Brian Cook</div>
      </nav>
    </footer>
  );
};
export default Footer;