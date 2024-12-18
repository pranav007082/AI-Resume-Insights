"use client";

import createPDFPage from "@/utils/CreatePDFPage";
import getPDFDocument from "@/utils/getPDFDocument";
import renderPDFToCanvas from "@/utils/renderPDFToCanvas";
import { useEffect, useRef } from "react";

interface PDFCanvasProps {
  resume_url: string;
}

const PDFCanvas: React.FC<PDFCanvasProps> = ({ resume_url }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderPDF = async () => {
      try {
        const pdfUrl = resume_url;

        // Load the PDF document
        const pdfDocument = await getPDFDocument(pdfUrl);

        if (containerRef.current) {
          containerRef.current.innerHTML = ""; // Clear previous content
        }

        // Iterate through all pages
        for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
          const pdfPage = await createPDFPage(pdfDocument, pageNumber);

          const canvas = document.createElement("canvas");
          await renderPDFToCanvas(pdfPage, canvas);

          if (containerRef.current) {
            containerRef.current.appendChild(canvas);
          }
        }
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    };

    renderPDF();
  }, [resume_url]);

  return <div ref={containerRef} style={{ overflowY: "scroll", height: "100%" }}></div>;
};

export default PDFCanvas;
