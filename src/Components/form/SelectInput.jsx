import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function SelectInput({ labelText, defaultText, options, key, onChange, onError, reset }) {
    const [selectedValue, setSelectedValue] = useState(defaultText);

    useEffect(() => {
        if (reset) {
            setSelectedValue('');
        }
    }, [reset]);

    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
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
            <select
                id={key}
                value={selectedValue}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected value="">{defaultText}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

SelectInput.propTypes = {
    reset: PropTypes.bool,
    onError: PropTypes.string,
    onChange: PropTypes.func,
    key: PropTypes.number,
    labelText: PropTypes.string.isRequired,
    defaultText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
};
