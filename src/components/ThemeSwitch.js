import React from "react"
import { Switch, VStack } from "@chakra-ui/react"

const ThemeSwitch = ({ isDark, toggleTheme }) => {
  return (
    <VStack>
      <p>Dark theme</p>
      <Switch
        colorScheme="teal"
        size="lg"
        checked={isDark}
        onChange={toggleTheme}
      />
    </VStack>
  )
}

export default ThemeSwitch
