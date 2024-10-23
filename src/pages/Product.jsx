import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"
import Header from "../components/Header"

const Product = () => {
  // const [show, setShow] = useState([])
  // const allProduct = useContext(MainContext)
  // setShow(allProduct?.main)
  // console.log(allProduct?.main);
  
  return (
    <div className=" text-6xl">
      <Header/>
    </div>
  )
}

export default Product
