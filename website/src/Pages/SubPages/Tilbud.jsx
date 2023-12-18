import TilbudPrice from "../../Datadump/Tilbud.json"
import ShopCard from '../../Components/ShopCard'
import "../../Styles/Home.css"

const Tilbud = () => (
    <div className='Tilbud-section'>
      <ShopCard items={TilbudPrice}/> 
    </div>
  );

  export default Tilbud;