import { useState } from "react";
import "./App.css";
import "./Component.css";
import { FaFileDownload } from "react-icons/fa";
import { Header } from "./component/Header";
import { Leaflet } from "./component/Leaflet";
import { PdfDownload } from "./component/PdfDownload";
import { Footer } from "./component/Footer";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [lang, setLang] = useState("ko");

  const BT = () => {
    return (
      <div className="BT-div">
        <PDFDownloadLink document={<PdfDownload lang={lang} />} fileName="aims.pdf">
          <FaFileDownload
            style={{
              pointer: "cursor",
              color: "white",
              alignItems: "flex-start",
              fontSize: "18px",
            }}
          />
        </PDFDownloadLink>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="App-div">
        <Header />
        <div className="Lang-toggle">
          <div className="Lang-buttons">
            <button
              className={lang === "ko" ? "active" : ""}
              onClick={() => setLang("ko")}
            >
              KR
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <BT />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "20px",
            paddingLeft: "32px",
          }}
        >
          <Leaflet lang={lang} />
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
