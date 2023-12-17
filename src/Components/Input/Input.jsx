import React, { useState } from 'react';

function Input() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <div className="flex items-center">
        <button
          type="button"
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md mr-2"
        >
          -
        </button>
        <input
          type="text"
          value={value}
          readOnly
          className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md ml-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

function IncrementDecrementForm() {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const increment = (fieldName) => {
    setInputValues((prevState) => ({
      ...prevState,
      [fieldName]: parseInt(prevState[fieldName] || 0) + 1
    }));
  };

  const decrement = (fieldName) => {
    setInputValues((prevState) => ({
      ...prevState,
      [fieldName]: parseInt(prevState[fieldName] || 0) - 1
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <form className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="input1" className="mr-2">
            Input 1:
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="input2" className="mr-2">
            Input 2:
          </label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="input3" className="mx-2">
            Input 3:
          </label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="input4" className="mr-2">
            Input 4:
          </label>
          <input
            type="text"
            id="input4"
            name="input4"
            value={inputValues.input4}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="input5" className="mx-2">
            Input 5:
          </label>
          <input
            type="text"
            id="input5"
            name="input5"
            value={inputValues.input5}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => increment('input4')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => decrement('input5')}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
            >
              -
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Input />
      <IncrementDecrementForm />
    </div>
  );
}
