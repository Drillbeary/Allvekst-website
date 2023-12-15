import VaskerietProduct from '../../Datadump/VaskerietProduct.json'
import SmåmekaniskProduct from '../../Datadump/SmåmekaniskProduct.json'
import Paravan from "../../Datadump/Paravan.json"


const Products = () => (
  <div className='products-section'>
  <h1>Our Products</h1>
  <div>
    <h2>Småmekanisk</h2>
    <ul>
      {SmåmekaniskProduct.slice(0, 6).map((item) => (
        <li key={item.id}>{item.name}, {item.price}</li>
      ))}
    </ul>
  </div>
  <div>
    <h2>Paravan</h2>
    <ul>
      {Paravan.slice(0, 6).map((item) => (
        <li key={item.id}>{item.name}, {item.price}</li>
      ))}
    </ul>
  </div>
  <div>
    <h2>Vaskeriet</h2>
    <ul>
      {VaskerietProduct.slice(0, 6).map((item) => (
        <li key={item.id}>{item.name}, {item.price}</li>
      ))}
    </ul>
  </div>
  <div>
    <h2>Snekkeriet?</h2>
    <p>brus kasse av tre, 250kr?</p>
  </div>
</div>
  );

  export default Products;