import SmåmekaniskService from '../../Text/SmåmekaniskService.json'
import VaskerietService from '../../Text/VaskerietService.json'
import "../../Styles/AllvekstNettbutikk.css"
import ShopCard from '../../Components/ShopCard'

const Service = () => (
  <div className='Service-section'>
    <h1>Services!</h1>
    <h2>Småmekanisk</h2>
       <ShopCard items={SmåmekaniskService}/>
    <h2>Vaskeriet</h2>
       <ShopCard items={VaskerietService}/>
        </div>
);

  export default Service;