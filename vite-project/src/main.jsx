import { createRoot} from "react-dom/client"
import App from './App'
import Register from "./components/register/Register"
 import './style.css'

createRoot(document.getElementById("root")).render(<Register></Register>)