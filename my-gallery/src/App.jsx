import React from 'react';

import ImageGallery from './component/gallary.jsx';

function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-[url('./assets/img.jpg')] bg-cover">
      <div className="container mx-auto">
        <ImageGallery />
      </div>
    </div>
  );
}

export default App;
