import "./index.css";

import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";

import MyResume from "./resume";

const Viewer = () => {
  return (
    <div className="wrapper">
      <PDFViewer style={{ flex: 1 }}>
        <MyResume />
      </PDFViewer>
    </div>
  );
};

ReactDOM.render(<Viewer />, document.getElementById("root"));
