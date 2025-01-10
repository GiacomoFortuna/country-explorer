import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Box as="main" maxW="1200px" mx="auto" p={4}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
