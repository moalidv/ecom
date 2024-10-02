import { createRoot } from "react-dom/client";
import "./output.css";
import MainRoutes from "./routes/MainRoutes";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>
);
