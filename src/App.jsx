import { Route, Routes } from "react-router";
import Routing from "./Routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
      <>
    <Routes>
      {Routing.map((items, index) => {
        return <Route key={index} path={items.path} element={items.element} />;
      })}
    </Routes>
    <ToastContainer/>
    </>
  
  );
};

export default App;
