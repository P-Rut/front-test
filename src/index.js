import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"
import store from "./redux/store/store"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
)
