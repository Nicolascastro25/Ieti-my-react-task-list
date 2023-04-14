import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Box, Flex, Text, Stack, Heading, Spacer, Button } from "@chakra-ui/react";

import { Home } from './Home'
import { SobreNosotros } from './SobreNosotros'
import { Tasks } from './Tasks'

export function Menu() {
  return (
    <BrowserRouter>
      <Box p={4}>
        <Flex align="center">
          <Box p="2">
            <Heading size="md">To-Do App</Heading>
          </Box>
          <Spacer />
          <Stack direction="row" spacing={4}>
            <Button as={Link} to="/" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/about" variant="ghost">
              About
            </Button>
            <Button as={Link} to="/tasks" variant="ghost">
              Tasks
            </Button>
          </Stack>
        </Flex>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SobreNosotros />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
