import React from 'react';

function Input({ value, setValue, onPressEnter, handleBlur}) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            onKeyDown={onPressEnter}
            autoFocus
            onBlur={handleBlur}
        />
    );
}

export default Input;
