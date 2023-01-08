import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Flex bg="lightcyan" justifyContent="center" gap="3rem" padding="1rem">
        <Button
          padding=".5rem 1.5rem"
          bg="teal"
          borderRadius="2rem"
          border="none"
        >
          <Link href="/">All</Link>
        </Button>
        <Button
          padding=".5rem 1.5rem"
          bg="teal"
          borderRadius="2rem"
          border="none"
        >
          <Link href="/html">HTML</Link>
        </Button>
        <Button
          padding=".5rem 1.5rem"
          bg="teal"
          borderRadius="2rem"
          border="none"
        >
          <Link href="/css">CSS</Link>
        </Button>
        <Button
          padding=".5rem 1.5rem"
          bg="teal"
          borderRadius="2rem"
          border="none"
        >
          <Link href="/javascript">JavaScript</Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
