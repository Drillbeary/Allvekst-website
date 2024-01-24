import VaskerietProduct from '../../Text/VaskerietProduct.json'
import SmåmekaniskProduct from '../../Text/SmåmekaniskProduct.json'
import ShopCard from '../../Components/ShopCard'
import "../../Styles/AllvekstNettbutikk.css"

const Products = () => (
  <div className='Products-section'>
    <h1>Products!</h1>
    <h2>Småmekanisk</h2>
    <ShopCard items={SmåmekaniskProduct}/>
    <h2>Vaskeriet</h2>
    <ShopCard items={VaskerietProduct}/>

</div>
  );

  export default Products;