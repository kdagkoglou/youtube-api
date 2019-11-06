import React from 'react';

const Checkbox = props => {
  return (
    <div className="form-check form-check-inline mb-3">
      <input 
        className="form-check-input" 
        type="checkbox" 
        id="listCheck" 
        {...props}  
        />
      <label className="form-check-label" htmlFor="listCheck">
        Update Video List on Video Select
      </label>
    </div>
  );
};

export default Checkbox;