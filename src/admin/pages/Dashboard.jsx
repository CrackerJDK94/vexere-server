import React from "react";
import { Box, H1, H4, Illustration, Text } from "@adminjs/design-system";

const pageHeaderHeight = 520;
const pageHeaderPaddingY = 160;
const pageHeaderPaddingX = 250;

const Dashboard = () => {
  return (
    <Box>
      <Box position="relative" overflow="hidden" data-css="default-dashboard">
        <Box
          position="absolute"
          bottom={50}
          left={-10}
          opacity={[0.2, 0.4, 1]}
          animate
        >
          <Illustration variant="Rocket" />
        </Box>
        <Box
          position="absolute"
          top={0}
          right={-15}
          opacity={[0.2, 0.4, 1]}
          animate
        >
          <Illustration variant="Moon" />
        </Box>
        <Box
          bg="grey100"
          height={pageHeaderHeight}
          py={pageHeaderPaddingY}
          px={["default", "lg", pageHeaderPaddingX]}
          dis
        >
          <Text textAlign="center" color="white">
            <H1>Welcome on Board!</H1>
            <H4 opacity={0.9}>
              This is the admin page for the admin of Eggs Gold
            </H4>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
