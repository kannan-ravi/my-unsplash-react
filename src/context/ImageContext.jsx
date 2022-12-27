import { createContext, useState, useEffect } from "react";
import api from '../api/imageApi';

const ImageContext = createContext({});

export const ImageProvider = ({children}) => {

  const [imageData, setImageData] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [labelText, setLabelText] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [typedPassword, setTypedPassword] = useState("");

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getImageData = async () => {
    try {
      const response = await api.get('/api/image');
      setImageData(response.data.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getImageData();
  }, [])
  
  useEffect(() => {
    const filteredResults = imageData.filter((image) => (image.label).toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filteredResults);
  }, [imageData, search])

  const handleNewPhoto = async (e) => {
    e.preventDefault();
    const newPhotoData = { label: labelText, photoURL: photoURL }
    try {
      const response = await api.post('/api/image', newPhotoData);
      setLabelText("");
      setPhotoURL("");
      getImageData();
      setAddPopup(false);
    } catch (error) {
      console.log(error.message)
    }
  }
  
  const handleDeletePopup = (id) => {
    handleDeletePhoto(id)
  }

  const handleDeletePhoto = async (deleteID) => {
    const photoId = { id: deleteID }
    try {
      await api.delete('/api/image', {data: photoId});
      getImageData()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ImageContext.Provider value={{
      imageData, setImageData, addPopup, setAddPopup, deletePopup, setDeletePopup,labelText, setLabelText, photoURL, setPhotoURL, searchResult,
      handleNewPhoto, handleDeletePhoto, handleDeletePopup,
      typedPassword, setTypedPassword,
      search, setSearch, 
    }}>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageContext