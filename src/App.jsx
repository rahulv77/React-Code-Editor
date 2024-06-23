import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear-gradient(to right, #14092e, #220505)"
      px={6}
      py={8}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;
