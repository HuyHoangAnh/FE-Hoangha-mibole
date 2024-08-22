import React, { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    if (cloudinaryRef.current) {
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: 'dsw5bxibw',
          uploadPreset: 'avbcu5ly',
        },
        (error, result) => {
          if (error) {
            console.error("Upload Widget Error:", error);
          } else {
            console.log(result);
          }
        }
      );
    }
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <button onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  );
};

export default UploadWidget;
