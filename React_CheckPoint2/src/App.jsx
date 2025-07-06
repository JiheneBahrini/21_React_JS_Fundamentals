import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { product } from './Products'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
      <div>
          {/* <Name name={product.name}/>
          <Price price={product.price}/>
          <Description description={product.description}/>
          <Image image_url={product.image_url}/> */}
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title><b>Product Name : </b><br></br>{product.name}</Card.Title>
        <Card.Text>
        <b>Description : </b><br></br>{product.description}<br></br><b>Price : </b>{product.price}
        </Card.Text>
        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
      </Card>
      </div>
  )
}
export default App
