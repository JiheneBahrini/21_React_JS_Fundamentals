import './App.css'

import Name from './Components/Name'
import Price from './Components/Price'
import Description from './Components/Description'
import Image from './Components/Image'
import { product } from './Products'

function App() {
  return (
      <div>
          <Name name={product.name}/>
          <Price price={product.price}/>
          <Description description={product.description}/>
          <Image image_url={product.image_url}/>
      </div>
  )
}
export default App
