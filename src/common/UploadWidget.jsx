import React, { useEffect, useRef } from "react";

const UploadWidget = (props) => {
  const {title} = props
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
          } else if (result.event === "success") {
            const imageUrl = result.info.secure_url;
            console.log("Image URL:", imageUrl);
            // Bạn có thể gửi URL này đến API của bạn hoặc sử dụng cho mục đích khác
          }
        }
      );
    }
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <button onClick={() => widgetRef.current.open()}>
      {title}
    </button>
  );
};

export default UploadWidget;
