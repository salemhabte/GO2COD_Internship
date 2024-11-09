import React from 'react';
import Todolist from './components/Todolist';
import Header from './components/header';

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-[url('./assets/img.jpg')] bg-cover bg-no-repeatbg-cover bg-no-repeat   flex items-center justify-center">
        <div className="container mx-auto p-4 max-w-lg">
          <div className="app-wrapper bg-transparent shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Header />
            </div>
            <div>
              <Todolist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
