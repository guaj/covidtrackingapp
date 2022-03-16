import { width } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import AdminTabs from '../AdminDashboard/adminDashboard';
import PatientListTable from "../CommonTabs/patientListTable";

import "./styles.css";
const ref = React.createRef();


export default function pdfCon(){
  return (
    <div className="pdfCon">
      <Pdf targetRef = {ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>

              <PatientListTable />
          
        

      </div>
    </div>
  );
}

function patientListTable(){

          
}


const rootElement = document.getElementById("root");
ReactDOM.render(<pdfCon />, rootElement);