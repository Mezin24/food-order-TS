import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Maels/Meals";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => {
    setIsModalShown(true)
  }

  const hideModal = () => {
    setIsModalShown(false)
  }
  
  return ( <>
    <Header showModal={showModal}/>
    <main>
      <Meals/>
    </main>
    {isModalShown && <Cart onClose={hideModal}/>}
  </> );
}
 
export default App;