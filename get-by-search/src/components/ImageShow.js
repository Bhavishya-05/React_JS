function ImageShow({image}){
    return(
    <>
      <img className="p-2 object-fit-cover img-fluid imgfit" src={image.urls.small} alt="img"/>
    
      </>
    )
  }
  export default ImageShow;