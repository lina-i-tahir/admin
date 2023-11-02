import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState();
  // const [status, setStatus] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5001/importSuppliers", {
      method: "POST",
      body: formData,
    });
    if (response) console.log("suss");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;

