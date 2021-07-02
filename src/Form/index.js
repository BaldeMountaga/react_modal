import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Foder Name</label>
        <input className="form-control" id="name" />
      </div>

      <div className="form-check form-check-inline">
        <input id="my-input" className="form-check-input" type="checkbox" name="" value="true" />
        <label for="my-input" className="form-check-label">Is-Root?</label>
      </div>

      <div class="form-group">
        <label for="my-select">Where to save it ?</label>
        <select id="my-select" class="custom-select" name="">
          <option>Parent folder</option>
          <option>Child folder</option>
        </select>
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Create
        </button>
      </div>
      
    </form>
  );
};
export default Form;
