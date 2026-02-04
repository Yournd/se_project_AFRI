import { useAppContext } from "../context/AppContext";
import "../styles/Header.css";
import logoImage from "../assets/ai-logo_image.svg";
import gitHubLogo from "../assets/github-mark-white.svg";

const Header = () => {
  const { openActiveModal } = useAppContext();
  return (
    <div className="header__container">
      <div className="header__logo_container">
        <img className="header__logo_image" src={logoImage} alt="Logo Image" />
        <h1 className="header__logo">AI Frontend Regression Inspector</h1>
      </div>
      <div className="header__btns">
        <button
          className="header__btn_primary"
          onClick={() => {
            openActiveModal("summary");
          }}
        >
          Full Summary
        </button>
        <button className="header__btn_secondary">Export Report</button>
      </div>
    </div>
  );
};

export default Header;
