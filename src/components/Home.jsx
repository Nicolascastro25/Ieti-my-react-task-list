import { Box, Center, Heading, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Box bg="#C6E1E2" color="black" p={8}>
      <Center>
        <Heading size="2xl">Bienvenidos a Listas de Tareas</Heading>
      </Center>
      <Text textAlign="center" mt={4}>
        Aquí podrás añadir, eliminar, editar, marcar y desmarcar tareas
      </Text>
      <Center mt={8}>
        <Text fontSize="xl">GitHub: Nicolascastro25</Text>
      </Center>
    </Box>
  );
};


  