import { useEffect, useState } from "react";

function App() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState(['images/pic3.png', '/images/14pm.png','images/pic1.png'])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])

  return (
    <div className="homeMain">
      <h1 className="heading">Welcome to Apple Store</h1>
      <h3 className="heading">Latest Mobile [14 Pro Max]</h3>
      <img className="slideshowpic" width={810} height={400} src={allImages[selectedImage]} /> <br />
     
  

    </div>
  );
}

export default App;
