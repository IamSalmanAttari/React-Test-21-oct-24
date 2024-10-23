import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [ main, setMain ] = useState(null);
  const [loader, setLoader] = useState(true);

  const MainData = async () => {
    setLoader(true);
    try {
      let productData = await axios.get("https://fakestoreapi.com/products");
      setMain(productData.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  useEffect(() => {
    MainData();
  }, []);
  return (
    <MainContext.Provider value={{ main,setMain }}>
      {!loader && children}
      {/* {children} */}
    </MainContext.Provider>
  );
};
