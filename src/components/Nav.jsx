import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" >Accueil</Link>
        </li>
        <li>
          <Link to="/add">Ajouter un livre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
