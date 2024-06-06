import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg" color="#cc00ff">
        Language
      </Text>
      <Menu isLazy>
        <MenuButton
          bgGradient="linear(to-l, #e30ea1, #530feb)"
          _hover={{
            bgGradient: "linear(to-l, #4c10d1, #bd0c86)",
          }}
          as={Button}
        >
          {language}
        </MenuButton>
        <MenuList bgGradient="linear(to-l, #0f0124, #220316)">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? "#ff00f7" : "#ff9ee6"}
              bg={lang === language ? "#060505bf" : "transparent"}
              _hover={{
                bg: "#060505bf",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="#af629b" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;
