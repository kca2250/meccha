import { Avatar, Heading } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <Heading as="h1" fontSize="24px" fontWeight="bold">
        meccha
      </Heading>
      <div>
        <Avatar size="sm" />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
};
