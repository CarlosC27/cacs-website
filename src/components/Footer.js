import logo from "../Assets/Personal_Brand/Footer-Logo.png";

export const Footer = (props) => {
    return (
        <>
        <footer>
        <div className="footer-content">
            <div className="Footer-Logo-Section">
                <div className="Footer-Image-Container">
                    <img src={logo} alt="Carlos Carrillo's logo" className="Footer-Image"/>
                </div>
            <p>&copy; 2024 CACS All rights reserved.</p>
          </div>
          <ul className="footer-links">
          </ul>
        </div>
      </footer>
        </>
    );
  };