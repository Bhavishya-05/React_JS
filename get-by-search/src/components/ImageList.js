import ImageShow from "./ImageShow";
function ImageList({images}){
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id}  image={image} />
  })
    // return <div>ImageList:{images.length}</div>
    return <div className="d-flex flex-wrap">{renderedImages}</div>

  }
  export default ImageList;