import TilbudPrice from "../../Datadump/Tilbud.json"
import "../../Styles/Home.css"

const Tilbud = () => (
    <div className='Tilbud-section'>
      <div className='Grid-container'>
      {TilbudPrice.slice(0, 4).map((item) => (
    <div key={item.id} className="Product-card">
      <img src={item.image} alt={item.name} />
      <div className="Product-details">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
    </div>
    ))}
      </div>
    </div>
  );

  export default Tilbud;