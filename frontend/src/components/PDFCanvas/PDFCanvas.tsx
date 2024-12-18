"use client";

import createPDFPage from "@/utils/CreatePDFPage";
import getPDFDocument from "@/utils/getPDFDocument";
import renderPDFToCanvas from "@/utils/renderPDFToCanvas";
import { useEffect, useRef } from "react";

interface PDFCanvasProps {
  resume_url: string;
}
const PDFCanvas:React.FC<PDFCanvasProps> = ({
  resume_url
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderPDF = async () => {
      try {
        const pdfUrl = resume_url
        const pageNumber = 1;

        const pdfDocument = await getPDFDocument(pdfUrl);
        const pdfPage = await createPDFPage(pdfDocument, pageNumber);

        const canvas = document.createElement("canvas");
        await renderPDFToCanvas(pdfPage, canvas);

        if (containerRef.current) {
          containerRef.current.innerHTML = ""; // Clear previous content
          containerRef.current.appendChild(canvas);
        }
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    };

    renderPDF();
  }, []);

  return <div ref={containerRef}></div>;
};

export default PDFCanvas;