"use client";

import createPDFPage from "@/utils/CreatePDFPage";
import getPDFDocument from "@/utils/getPDFDocument";
import renderPDFToCanvas from "@/utils/renderPDFToCanvas";
import { useEffect, useRef } from "react";


const PDFCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderPDF = async () => {
      try {
        const pdfUrl = window.location.origin + "/dummy.pdf"; // Replace with your PDF URL
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