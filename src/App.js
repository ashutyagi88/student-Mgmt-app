import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./screens/Details";
import HomeScreen from "./screens/HomeScreen";
import NewStudent from "./screens/NewStudent";
import UpdateStudent from "./screens/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
        <Route path="/new" element={<NewStudent></NewStudent>}></Route>
        <Route path="/update" element={<UpdateStudent></UpdateStudent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
