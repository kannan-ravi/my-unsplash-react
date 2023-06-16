import './addPhoto.css';
import ImageContext from '../../context/ImageContext';
import { useContext } from 'react';

const AddPhoto = () => {

  const { setAddPopup, photoURL, setPhotoURL, labelText, setLabelText, handleNewPhoto } = useContext(ImageContext);

  return (
    <section className='popup--container'>
      <div className='popup--cancel__container' onClick={() => setAddPopup(false)}></div>
      <div className='popup--inside__container'>
        <h3>Add a new photo</h3>
        <form onSubmit={handleNewPhoto}
          className='form--container'>
          <label htmlFor="label-input">Label</label>
          <input 
            type="text"
            id="label-input" 
            placeholder='Dog licking nose'
            autoComplete='off'
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
          />
          <label htmlFor="photoURL-input">Photo URL</label>
          <input 
            type="text"
            id='photoURL-input'
            placeholder='https://images.url.com/photo-somerandomlettersthatrepresentimage...' 
            autoComplete='off'
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <div className='form--button__container'>
            <button type='button' className='from--cancel__button' onClick={() => setAddPopup(false)}>Cancel</button>
            <button type='submit' className='form--submit__button'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddPhoto