import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Router />);
