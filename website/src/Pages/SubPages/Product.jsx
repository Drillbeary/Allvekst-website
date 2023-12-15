import VaskerietProduct from '../../Datadump/VaskerietProduct.json'
import SmåmekaniskProduct from '../../Datadump/SmåmekaniskProduct.json'
import Paravan from "../../Datadump/Paravan.json"
import ShopCard from '../../Components/ShopCard'
import "../../Styles/Home.css"

const Products = () => (
  <div className='Products-section'>
    <h1>Products!</h1>
    <h2>Småmekanisk</h2>
    <ShopCard items={SmåmekaniskProduct}/>
    <h2>Vaskeriet</h2>
    <ShopCard items={VaskerietProduct}/>
    <h2>Paravan</h2>
    <ShopCard items={Paravan}/>
</div>
  );

  export default Products;