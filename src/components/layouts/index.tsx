import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Header } from "./Header";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container style={styles.container} maxWidth="container.lg">
      <Header />
      {children}
    </Container>
  );
};

const styles = {
  container: {
    fontFamily: "Ubuntu, Noto Sans JP, sans-serif",
    paddingTop: "10px",
  },
};
