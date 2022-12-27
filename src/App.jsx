import Header from './components/header/Header';
import Image from './components/image/Image';
import AddPhoto from './components/addPhoto/AddPhoto';
import DeletePhoto from './components/deletePhoto/DeletePhoto';

import ImageContext from './context/ImageContext';
import { useContext } from 'react';

function App() {
  const { addPopup } = useContext(ImageContext);

  return (
    <div className="container">
      <Header />
      <Image />
      { addPopup && <AddPhoto /> }
      {/* { deletePopup && <DeletePhoto /> } */}
    </div>
  )
}

export default App
