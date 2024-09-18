import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function TextInput({ labelText, defaultText, key, onChange, onError, reset}) {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (reset) {
            setValue('');
        }
    }, [reset]);
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div>
            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            {onError &&
                <label className='block mt-2 text-sm text-red-700'>
                    {onError}
                </label>
            }
            <input 
            id={key} 
            type="text"
            placeholder={defaultText} 
            value={value}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
    );
}

TextInput.propTypes = {
    reset: PropTypes.bool,
    onError: PropTypes.string,
    onChange: PropTypes.func,
    key: PropTypes.number,
    labelText: PropTypes.string.isRequired,
    defaultText: PropTypes.string,
};
