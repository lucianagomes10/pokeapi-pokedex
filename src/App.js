import React from "react";
import GlobalStyle from "./components/globalStyle";
import ColorProvider from "./components/globalStyle";
import RoutesPage from "./routes/index";
import AppProvider from "./provider/provider";
import UserContext from "./context/context";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider store={UserContext}>
          <NavBar />
          <RoutesPage />
          <GlobalStyle />
          <ColorProvider />
        </AppProvider>
      </Provider>
    </>
  );
}

export default App;
