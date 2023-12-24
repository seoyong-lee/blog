import { routes } from "./components/root/App";
import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";

export const createRoot = ViteReactSSG({ routes });
