import React, { useEffect, useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=9&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  if (loading) {
    return <div className="text-center">Loading images...</div>;
  }

  return (
    <>
   
   <div className="flex items-center justify-center h-screen">
  <button 
    className="bg-transparent hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
    onClick={() => setIsOpen(true)}
  >
    My Gallery
  </button>
</div>
      
      <SlideshowLightbox
        images={images.map((image, index) => ({
          src: image.urls.regular,
          alt: image.alt_description
        }))}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => setIsOpen(false)}
      />
      
    </>
  );
}

export default ImageGallery;