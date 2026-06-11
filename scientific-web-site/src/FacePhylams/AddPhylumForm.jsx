import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhylum } from '../store/phylumSlice';

export default function AddPhylumForm({ onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    meaning: '',
    commonName: '',
    characteristics: '',
    link: '',
    image: '',
    article: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhylum = {
      ...formData,
      id: crypto.randomUUID()
    };
    dispatch(addPhylum(newPhylum));
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Phylum</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="meaning">Meaning</label>
          <input id="meaning" name="meaning" value={formData.meaning} onChange={handleChange} />
          <label htmlFor="commonName">Common Name</label>
          <input id="commonName" name="commonName" value={formData.commonName} onChange={handleChange} />
          <label htmlFor="characteristics">Characteristics</label>
          <input id="characteristics" name="characteristics" value={formData.characteristics} onChange={handleChange} />
          <label htmlFor="link">Link</label>
          <input id="link" name="link" value={formData.link} onChange={handleChange} />
          <label htmlFor="image">Image URL</label>
          <input id="image" name="image" value={formData.image} onChange={handleChange} />
          <label htmlFor="article">Article</label>
          <textarea id="article" name="article" value={formData.article} onChange={handleChange}></textarea>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}