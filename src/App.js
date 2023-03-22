import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="root-wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
