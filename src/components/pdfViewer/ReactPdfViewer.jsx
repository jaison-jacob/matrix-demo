import { Box } from "@mui/material";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import kk from "/form"

const ReactPdfViewer = (props) => {
  const { pdfUrl } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const file = "/form-cms1500-compressed.pdf";

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const onFileLoadError = (error) => {
    console.error("Error loading PDF file:", error.message);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <Box
      sx={{
        padding: "30px 50px",
        backgroundColor: "#dedede",
        marginTop: "0px",
        overflowY: "auto",
        height: "calc(100vh - 30px)",
        // marginBottom: "200px",
      }}
    >
      {/* <h2>PDF Viewer</h2> */}
      <p style={{ marginBottom: "20px" }}>
        Page {pageNumber} of {numPages}
      </p>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onFileLoadError}
        className="custom-class-name-1 custom-class-name-2"
        renderTextLayer={false}
        renderAnnotationLayer={false}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return <Page pageNumber={page} />;
          })}
      </Document>
    </Box>
  );
};

export default ReactPdfViewer;
