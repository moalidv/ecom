import { createRoot } from "react-dom/client";
import "./output.css";
import MainRoutes from "./routes/MainRoutes";

createRoot(document.getElementById("root")!).render(<MainRoutes />);
