import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Calendar from "./components/calendar";
import Updates from "./components/latest";

function App() {
  return (
    <div className="flex flex-row h-screen bg-gray-200">
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow  overflow-auto">
        <div className="flex flex-row ">
          <Home />
          <div>
            <Updates />
          </div>
        </div>

        <div className="mt-4 ml-4 mr-4 ">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
