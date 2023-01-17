import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import estilos from './Navbar.module.css';
import { Filter } from '../Filter/Filter.jsx';
import { Sort } from '../Sort/Sort.jsx';
import useHistory from 'react-router';
export default function Nav() {
  const history = useHistory();
  return (
    <nav className={estilos.cuerpoNav}>
      <div className={estilos.linkContainer}>
        {/* <Link to='/' className={estilos.link}>
          <span>Back</span>
        </Link> */}
        <button className={estilos.link} onClick={() => history.push("/")}></button>
        <Link to='/form' className={estilos.link}>
          <span>Create your recipe</span>
        </Link>
      </div>
      <div className={estilos.filter}>
        <Filter />
      </div>
      <div className={estilos.sort}>
        <Sort />
      </div>
      <div className={estilos.search}>
        <SearchBar />
      </div>
    </nav>
  )
}