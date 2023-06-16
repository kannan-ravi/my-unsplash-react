import { useContext } from "react"
import ImageContext from "../../context/ImageContext"
import './image.css';

const Image = () => {
  const { handleDeletePhoto, searchResult } = useContext(ImageContext);

  return (
    <section className="image--container">
      { 
      searchResult.length ? searchResult.map((image) => (
        <div key={image._id} className="single--image__container">
          <div className="image--overlay__container">
            <img key={image._id} 
              src= {image?.photoURL} 
              alt={image?.label} 
              className="single--image"
            />
          </div>
          <button className="single--image__button" onClick={() => handleDeletePhoto(image._id)}>
            delete
          </button>
          <p className="single--image__name">{image?.label}</p>
        </div>
      ))
      : 
      <div className="image--noResult__container">
        <p className="image--noResult__text">No Search Result found...</p>
      </div>
    }
    </section>
  )
}

export default Image