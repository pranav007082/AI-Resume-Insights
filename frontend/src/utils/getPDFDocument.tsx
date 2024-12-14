import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";

const getPDFDocument = async (path: string): Promise<PDFDocumentProxy> => {
  pdfjs.GlobalWorkerOptions.workerSrc =
    window.location.origin + "/pdf.worker.min.js";

  return pdfjs.getDocument(path).promise;
};

export default getPDFDocument;