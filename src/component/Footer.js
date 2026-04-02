import "../App.css";

export const Footer = ({ lang }) => {
  return (
    <div className="Footer-div">
      <div className="Footer-div-left">
        <span>{lang === "en" ? "CEO Jin-hyo Park" : "대표이사 박진효"}</span>
        <span>
          {lang === "en"
            ? "32, Seongseo-gongdan-ro 11-gil, Dalseo-gu, Daegu, Republic of Korea, Rm 412"
            : "대구광역시 달서구 성서공단로11길 32, 연구1동 412호"}
        </span>
        <span>T. 053 - 585 - 0979</span>
      </div>
      <div
        className="Footer-div-right"
        onClick={() => window.open("https://aimd.ai.kr/company/aims", "_blank")}
      >
        <span>{lang === "en" ? "About Us" : "회사소개"}</span>
      </div>
    </div>
  );
};
