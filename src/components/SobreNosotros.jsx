import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle, FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

export function SobreNosotros(){
  return(
    <Box bg="#C6E1E2" p={8}display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Box textAlign="center">
      <Heading textAlign="center" fontSize="3xl" mb={4}>
        About Us
      </Heading>
      </Box>
      <Text textAlign="center" fontSize="xl" mb={4}>Este es una app para crear listas con React</Text>
      <Heading fontSize="xl" mb={2}>Aquí podrás:</Heading>
      <UnorderedList mb={4}>
        <ListItem><FaPlusCircle /> Agregar tareas</ListItem>
        <ListItem><FaMinusCircle /> Desmarcar tareas</ListItem>
        <ListItem><FaCheckCircle /> Marcar tareas como realizadas</ListItem>
        <ListItem><FaTrash /> Eliminar tareas</ListItem>
        <ListItem><FaEdit /> Editar tareas</ListItem>
      </UnorderedList>
      <Heading fontSize="xl" mb={2}>Para realizar este trabajo se usó:</Heading>
      <UnorderedList mb={4}>
        <ListItem>React</ListItem>
        <ListItem>React Router</ListItem>
        <ListItem>React Hooks como:
          <UnorderedList>
            <ListItem>useState</ListItem>
            <ListItem>useEffect</ListItem>
            <ListItem>useForm</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Chakra UI para estilos y componentes gráficos</ListItem>
      </UnorderedList>
    </Box>
  );
};
