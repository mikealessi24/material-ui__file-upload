import React, { useState } from "react";

import { Button } from "@material-ui/core";

export default function FileUpload() {
  const [image, setImage] = useState(undefined);

  const uploadImage = (e) => {
    setImage(e.target.files[0].name);
    alert(e.target.files[0].name);
  };

  return (
    <div>
      <label htmlFor="upload-photo">
        <input
          hidden
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
          //   could also accept different file types
          onChange={(e) => uploadImage(e)}
        />
        <Button variant="contained" component="span">
          Upload a photo
          {/* this could also be icon/text/etc */}
        </Button>
      </label>
    </div>
  );
}
