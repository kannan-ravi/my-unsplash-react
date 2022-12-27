import './deletePhoto.css';
import ImageContext from '../../context/ImageContext';
import { useContext } from 'react';

const DeletePhoto = () => {

  const { setDeletePopup, handleDeletePopup, typedPassword, setTypedPassword } = useContext(ImageContext);

  return (
    <section className='popup--container'>
      <div className='popup--cancel__container' onClick={() => setDeletePopup(false)}></div>
      <div className='popup--inside__container'>
        <h3>Are you sure?</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleDeletePopup();
        }}
          className='form--container'>
          <label htmlFor="password-input">Password</label>
          <input 
            type="password"
            placeholder='******************' 
            autoComplete='off'
            value={typedPassword}
            onChange={(e) => setTypedPassword(e.target.value)}
          />
          <div className='form--button__container'>
            <button className='from--cancel__button' type="button" onClick={() => setDeletePopup(false)}>Cancel</button>
            <button className='from--delete__button' type='submit'>Delete</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default DeletePhoto