import { Box } from "@mui/material";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import kk from "/form"

const ReactPdfViewer = (props) => {
  const { pdfUrl } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const file = "/form-cms1500.pdf";

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const onFileLoadError = (error) => {
    console.error("Error loading PDF file:", error.message);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <Box sx={{ height: "calc(100vh - 100px)", overflowY: "auto" }}>
      <h2>PDF Viewer</h2>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onFileLoadError}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Box>
  );
};

export default ReactPdfViewer;
