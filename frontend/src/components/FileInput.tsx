"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

const FileInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages
  const router = useRouter();

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserId();
      setUserId(id);
    };
    fetchUserId();
  }, []);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setErrorMessage(null); // Clear any existing error messages
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile || !userId) return;
  
    const formData = new FormData();
    formData.append("pdf", selectedFile);
  
    try {
      const response = await apiService.post("/api/ats/upload-resume/", formData);
  
      if (response.success) {
        router.push(`/resume-analysis`);
      } else {
        // Display errors returned by the server
        const errors = response.errors;
        const errorMsg = errors?.non_field_errors?.[0] || 
                         Object.values(errors?.field_errors || {}).flat()[0] || 
                         "An unknown error occurred.";
        setErrorMessage(errorMsg);
      }
    } catch (error: any) {
      // Handle network or unexpected errors
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const errorMsg = errors?.non_field_errors?.[0] || 
                         Object.values(errors?.field_errors || {}).flat()[0] || 
                         "An unknown error occurred.";
        setErrorMessage(errorMsg);
      } else {
        setErrorMessage("A network error occurred. Please try again later.");
      }
    }
  };
  

  const truncateFileName = (fileName: string, maxLength: number): string => {
    if (fileName.length > maxLength) {
      return fileName.slice(0, maxLength) + "...";
    }
    return fileName;
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="w-[350px] h-[200px] text-lg font-medium flex flex-col items-center justify-center gap-1.5 text-gray-700 border-[1.5px] border-dashed border-blue-600 rounded-2xl cursor-pointer transition duration-300 ease-in-out hover:border-blue-800"
        onClick={handleUploadClick}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-t from-blue-500 to-blue-400 text-white">
          <UploadIcon />
        </div>
        Upload Resume
      </button>

      {selectedFile && (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-2xl p-2.5 mt-4 w-[350px]">
          <p className="text-sm font-medium m-0 text-blue-800">
            {truncateFileName(selectedFile.name, 40)}
          </p>
          <button
            onClick={() => setSelectedFile(null)}
            className="w-10 h-10 flex items-center justify-center text-gray-600 bg-transparent rounded-full transition duration-100 ease-in-out hover:text-white hover:bg-gradient-to-t from-blue-500 to-blue-400"
          >
            <CloseIcon />
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="text-red-500 text-sm mt-4">
          {errorMessage}
        </div>
      )}

      {selectedFile && (
        <button
          onClick={handleSubmit}
          className="mt-4 w-[350px] h-[45px] bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white font-medium rounded-2xl transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Submit Resume
        </button>
      )}
    </div>
  );
};

export default FileInput;
