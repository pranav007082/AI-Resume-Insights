'use client';
import FileInput from '../components/FileInput';
import UpperLeftLogo from '../components/Logo/UpperLeftLogo'; // Use capitalized component name

const ResumeUpload = () => {
  return (
    <>
      <UpperLeftLogo />
      <div className="flex items-center justify-center min-h-screen">
        <FileInput />
      </div>
    </>
  );
};

export default ResumeUpload;
