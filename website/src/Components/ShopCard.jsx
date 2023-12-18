import AltImage from '../Images/Altimage.png'
const ShopCard = ({ items }) => {
  // Calculate the number of items to render based on the condition
  const itemsToRender = items.length >= 4 ? 4 : 2 ;

  return (
    <div className="Grid-container">
      {items.slice(0, itemsToRender).map((item) => (
        <div key={item.id} className="Product-card">
          <img src={item.image} alt={AltImage} />
          <div className="Service-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;