import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');  

 
  const handleClick = (value) => {
    if (value === 'AC') {
      setInput(''); //
    } else if (value === 'DE') {
      setInput(input.slice(0, -1)); 
    } else if (value === '=') {
      try {
        
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error'); 
      }
    } else {
      setInput(input + value); 
    }
  };

  return (
    <>
      <div className="bg-[url('./assets/img.webp')] flex justify-center items-center min-h-screen bg-transparent">
        <div className="bg-transparent p-6 rounded-lg shadow-lg w-80">
          <form action="">
            <div className="mb-4">
              <input
                type="text"
                className="w-full text-right p-4 text-xl border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input}
                placeholder="0"
                disabled
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <input type="button" value="AC" className="col-span-2 p-4 bg-red-400 text-white rounded-lg hover:bg-red-500" onClick={() => handleClick('AC')} />
              <input type="button" value="DE" className="p-4 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500" onClick={() => handleClick('DE')} />
              <input type="button" value="/" className="p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500" onClick={() => handleClick('/')} />

              <input type="button" value="7" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('7')} />
              <input type="button" value="8" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('8')} />
              <input type="button" value="9" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('9')} />
              <input type="button" value="*" className="p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500" onClick={() => handleClick('*')} />

              <input type="button" value="4" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('4')} />
              <input type="button" value="5" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('5')} />
              <input type="button" value="6" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('6')} />
              <input type="button" value="+" className="p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500" onClick={() => handleClick('+')} />

              <input type="button" value="1" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('1')} />
              <input type="button" value="2" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('2')} />
              <input type="button" value="3" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('3')} />
              <input type="button" value="-" className="p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500" onClick={() => handleClick('-')} />

              <input type="button" value="00" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('00')} />
              <input type="button" value="0" className="p-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300" onClick={() => handleClick('0')} />
              <input type="button" value="=" className="col-span-2 p-4 bg-green-400 text-white rounded-lg hover:bg-green-500" onClick={() => handleClick('=')} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
