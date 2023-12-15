import TilbudPrice from "../../Datadump/SmåmekaniskService.json"

const Tilbud = () => (
    <div className='tilbud-section'>
      <h1>Tilbud</h1>
      <ul>
            {TilbudPrice.slice(0, 6).map((item) => (
              <li key={item.id}>{item.name}, {item.price}</li>
            ))}
          </ul>
    </div>
  );

  export default Tilbud;