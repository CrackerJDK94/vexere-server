import React from "react";
import { Box } from "@adminjs/design-system";

const Image = (props) => {
  const params = props.record.params;
  const { path } = props.property;
  const img = params[path];

  return (
    <Box width={120} p={12}>
      <img src={img} alt="" />
    </Box>
  );
};

export default Image;
