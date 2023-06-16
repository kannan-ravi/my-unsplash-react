import UnsplashLogo from '../../assets/my_unsplash_logo.svg';
import './header.css';
import ImageContext from '../../context/ImageContext';
import { useContext } from 'react';

const Header = () => {

  const { setAddPopup, search, setSearch } = useContext(ImageContext);

  return (
    <header className='header--container'>
      <div className='header--logoSearch__container'>
        <img src={UnsplashLogo} alt='Unsplash Logo' />
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='form--control__container'>
          <label htmlFor="search-box">Search-Box</label>
          <span className="material-symbols-outlined">search</span>
          <input 
            type="text" 
            id='search-box'
            placeholder='Search by name'
            value={search}
            onChange= {(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <button className='header--addphoto__button'
        onClick={() => setAddPopup(true)}
      >
        Add a Photo
      </button>
    </header>
  )
}

export default Header