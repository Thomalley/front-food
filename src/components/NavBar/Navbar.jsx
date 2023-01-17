import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import estilos from './Navbar.module.css';
import { Filter } from '../Filter/Filter.jsx';
import { Sort } from '../Sort/Sort.jsx';


export default function Nav() {
  const navigate = useNavigate()
  return (
    <nav className={estilos.cuerpoNav}>
      <div className={estilos.linkContainer}>
        {/* <Link to='/' className={estilos.link}>
          <span>Back</span>
        </Link> */}
        <button className={estilos.link} onClick={() => navigate("/")}></button>
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