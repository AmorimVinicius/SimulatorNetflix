import React from 'react';

function FormField({ type, value, name, onChange, label }) {
  // PROPS
  if (type === 'textarea') {
    return (
      <div>
        <textArea type={type} value={value} name={name} onChange={onChange} />
        <label>
          <span>{label}</span>
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <input type={type} value={value} name={name} onChange={onChange} />
        <label>
          <span>{label}</span>
        </label>
      </div>
    );
  }
}

export default FormField;
