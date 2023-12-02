import React from "react";
import { Box, Text } from "@adminjs/design-system";

const TextField = (props) => {
  const params = props.record.params;
  const { path } = props.property;
  const value = params[path];

  return (
    <Box>
      <Text>{value}</Text>
    </Box>
  );
};

export default TextField;
