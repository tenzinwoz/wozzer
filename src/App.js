import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/index.scss";
import "../node_modules/bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="root-wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
