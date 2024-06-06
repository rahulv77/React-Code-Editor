import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, #0a031a  , #180202)"
      px={6}
      py={8}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;