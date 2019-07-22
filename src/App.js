import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from "./components/contexts";
import { CartContext } from "./components/contexts"

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			

		  <ProductContext.Provider value={{ products, addItem }} > 

		  	<CartContext.Provider value={{cart}}>
				<Navigation  />
			</CartContext.Provider>


			{/* Routes */}
			<Route exact path="/" component={Products} />
			
		<CartContext.Provider value={{cart}}>
			<Route path="/cart" component={ShoppingCart}
		
				
			/> </CartContext.Provider>
		  </ProductContext.Provider>
		</div>
	);
}

export default App;


