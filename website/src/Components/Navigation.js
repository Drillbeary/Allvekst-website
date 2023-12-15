import {Link} from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
        <li><Link to='/Allvekst'>Allvekst</Link></li>
        <li><Link to='/AllvekstMedia'>Allvekst Media?</Link></li>
      </ul>
    </nav>
  );

  export default Navigation;