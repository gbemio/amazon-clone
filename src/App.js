import React from 'react';
import Product from './Product';
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <h2 className={styles.error}>An error occured</h2>


<Product name='Amazon echo' description='Your AI Assistant' price={59.99} />
<Product name='Iphone 12 pro max' description='The best iphone' price={1200} />
<Product name='MacBook pro' description='Your favorite computer' price={2500} />

      {/* product: name, description, price */}
      {/* product: name, description, price */}
      {/* product: name, description, price */}
      {/* product: name, description, price */}
    </div>
  )
}

export default App
