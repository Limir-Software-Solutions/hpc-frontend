import React from "react";
import DOMPurify from "dompurify";

// COMPONENTS
import Typography from "@mui/material/Typography";

export default function SanitizeHTML({ data }) {
  const fullText = DOMPurify.sanitize(data);
  const renderHTML = (html) => {
    return { __html: html };
  };

  return (
    <Typography
      variant="body1"
      sx={{
        marginY: "2rem",
      }}
      dangerouslySetInnerHTML={renderHTML(fullText)}
    />
  );
}
