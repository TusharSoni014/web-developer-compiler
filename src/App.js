import "./App.scss";
import CodeInput from "./components/CodeInput/CodeInput";
import CodePreview from "./components/CodePreview/CodePreview";
import Split from "react-split";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="App">
        <Header />
        <Split minSize={280} className="split">
          <CodeInput />
          <CodePreview />
        </Split>
      </div>
    </>
  );
}

export default App;
