import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function RangeInput({ labelText, key, onChange, reset }) {
  const [value, setValue] = useState(50);

      useEffect(() => {
        if (reset) {
            setValue(50);
        }
    }, [reset]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    let adjustedValue;

    if (newValue < 25) {
      adjustedValue = 0;
    } else if (newValue < 75) {
      adjustedValue = 50;
    } else {
      adjustedValue = 100;
    }
    
    setValue(adjustedValue);
    onChange(getLabel(adjustedValue)); 
  };

  const getLabel = (value) => {
    switch (value) {
      case 0:
        return "Baja";
      case 50:
        return "Media";
      case 100:
        return "Alta";
      default:
        return "";
    }
  };

  return (
    <div className="w-full p-2 h-fit">
      <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900">{labelText}</label>
      <input
        id={key}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        step="50"
      />
      <div className='h-full flex justify-between'>
        <span className="text-sm text-gray-600">Baja</span>
        <span className="text-sm text-gray-600">Media</span>
        <span className="text-sm text-gray-600">Alta</span>
      </div>
      <div className='h-full text-sm text-gray-400'>Desliza para asignar la prioridad del problema reportado</div>
    </div>
  );
}


RangeInput.propTypes = {
  reset: PropTypes.bool,
  onChange: PropTypes.func,
  key: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};
