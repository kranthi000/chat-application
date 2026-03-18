import { createRoot} from "react-dom/client"
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import Register from "./components/register/Register"
 import './style.css'

createRoot(document.getElementById("root")).render(<Provider>
    <App></App>

</Provider>
)