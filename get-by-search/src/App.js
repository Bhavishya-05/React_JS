import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
function App(){
  const[images,setImages]=useState([]);
  const handleSubmit = async (term) =>{
    // console.log('Do a search with ', term);

    const result = await searchImages(term);
    setImages(result);
  }
  return (
  <>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}
export default App;


