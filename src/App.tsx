import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Maels/Meals";

const App = () => {
  return ( <div>
    <Header/>
    <main>
      <Meals/>
    </main>
    {/* <Cart/> */}
  </div> );
}
 
export default App;