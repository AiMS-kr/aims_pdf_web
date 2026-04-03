import Leaflet1 from "../img/leaflet1.jpg";
import Leaflet2 from "../img/leaflet2.jpg";
import EnLeaflet1 from "../img/enLeaflet1.jpg";
import EnLeaflet2 from "../img/enLeaflet2.jpg";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";

export const PdfDownload = ({ lang }) => {
  const [img1, img2] =
    lang === "en" ? [EnLeaflet1, EnLeaflet2] : [Leaflet1, Leaflet2];
  const styles = StyleSheet.create({
    page: { padding: 30 },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          className="Leaflet-img"
          src={img1}
          alt="leaflet1"
          crossOrigin="anonymous"
        />
        <div style={{ height: "8px", width: "100%" }}></div>
        <Image
          className="Leaflet-img"
          src={img2}
          alt="leaflet2"
          crossOrigin="anonymous"
        />
      </Page>
    </Document>
  );
};
