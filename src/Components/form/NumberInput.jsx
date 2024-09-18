import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function NumberInput({ labelText, defaultText, key, onChange, reset }) {
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

    const handleKeyDown = (e) => {
        if (
            ['Backspace', 'Tab', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)
        ) {
            return;
        }
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleInput = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');

        if (value !== '') {
            let numericValue = parseInt(value, 10);
            if (numericValue > 30) {
                value = '30';
            } else if (numericValue < 0) {
                value = '0';
            }
        }

        e.target.value = value;
    };
    return (
        <div>
            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <input id={key}
                value={value}
                onChange={handleChange}
                type="number"
                min={0}
                max={30}
                placeholder={defaultText}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
    );
}

NumberInput.propTypes = {
    reset: PropTypes.bool,
    onChange: PropTypes.func,
    key: PropTypes.number,
    labelText: PropTypes.string.isRequired,
    defaultText: PropTypes.string,
};
