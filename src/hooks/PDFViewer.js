import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PDFViewer = ({ pdf }) => {
  return (
    <Document file={pdf}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;