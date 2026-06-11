import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPhylum } from '../store/phylumSlice';

export default function EditPhylumForm({ phylum, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(phylum);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPhylum(formData));
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Phylum</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="edit-name">Name</label>
          <input id="edit-name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="edit-meaning">Meaning</label>
          <input id="edit-meaning" name="meaning" value={formData.meaning} onChange={handleChange} />
          <label htmlFor="edit-commonName">Common Name</label>
          <input id="edit-commonName" name="commonName" value={formData.commonName} onChange={handleChange} />
          <label htmlFor="edit-characteristics">Characteristics</label>
          <input id="edit-characteristics" name="characteristics" value={formData.characteristics} onChange={handleChange} />
          <label htmlFor="edit-link">Link</label>
          <input id="edit-link" name="link" value={formData.link} onChange={handleChange} />
          <label htmlFor="edit-image">Image URL</label>
          <input id="edit-image" name="image" value={formData.image} onChange={handleChange} />
          <label htmlFor="edit-article">Article</label>
          <textarea id="edit-article" name="article" value={formData.article} onChange={handleChange}></textarea>
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}