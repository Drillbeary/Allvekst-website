import SmåmekaniskService from '../../Datadump/SmåmekaniskService.json'
import VaskerietService from '../../Datadump/VaskerietService.json'


const Service = () => (
    <div>
    <h1>Our Service</h1>
        <div>
          <h2>Småmekanisk</h2>
          <ul>
            {SmåmekaniskService.slice(0, 6).map((item) => (
              <li key={item.id}>{item.name}, {item.price}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Vaskeriet</h2>
          <ul>
            {VaskerietService.slice(0, 6).map((item) => (
              <li key={item.id}>{item.name}, {item.price}</li>
            ))}
            
          </ul>
        </div>
        <div>
          <h2>Snekkeriet</h2>
          <p>Bygge prosjekter</p>
        </div>
        </div>
);

  export default Service;