import {Link} from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
        <li><Link to='/Allvekst'>Allvekst</Link></li>
      </ul>
    </nav>
  );

  export default Navigation;