import { appConfig } from "./config";
import "./styles/index.css";

function App() {
  document.title = appConfig.title;
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
