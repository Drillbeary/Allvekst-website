import TilbudPrice from "../../Text/Tilbud.json"
import ShopCard from '../../Components/ShopCard'
import "../../Styles/AllvekstNettbutikk.css"

const Tilbud = () => (
    <div className='Tilbud-section'>
      <ShopCard items={TilbudPrice}/> 
    </div>
  );

  export default Tilbud;