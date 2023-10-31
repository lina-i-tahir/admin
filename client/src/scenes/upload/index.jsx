import React from "react";

const Upload = () => {
  return (
    <div>
      <p>
        Use the form below to upload a list of authors. Click{" "}
        <a href="/template">here</a> for an example template.
      </p>
      <form action="/" method="POST" encType="multipart/form-data">
        <input type="file" name="file" accept="*.csv" />
        <br />
        <br />
        <input type="submit" value="Upload Authors" />
      </form>
    </div>
  );
};

export default Upload;
