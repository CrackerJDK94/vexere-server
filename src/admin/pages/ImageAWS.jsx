import React from "react";
import { Box } from "@adminjs/design-system";

const ImageAWS = (props) => {
  const { filePath } = props.record.params;
  const urlWithoutSearchParams = filePath.split('?')[0];
  const img = urlWithoutSearchParams + '.png';

  return (
    <Box width={200} p={20}>
      <img src={img} alt="" />
    </Box>
  );
};

export default ImageAWS;
