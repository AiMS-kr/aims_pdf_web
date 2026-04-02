import "../App.css";
import Logo from "../img/logo.png";

export const Header = () => {
  return (
    <div className="Header-div">
      <img className="Logo-img" src={Logo} alt="logo" />
      <p style={{ fontSize: "10px", marginRight: "20px" }}>
        {"Artificial Intelligence for Manufacturing System"
          .split("")
          .map((ch, i) =>
            ch >= "A" && ch <= "Z" ? (
              <span key={i} style={{ fontWeight: "bold" }}>
                {ch}
              </span>
            ) : (
              ch
            ),
          )}
      </p>
    </div>
  );
};
