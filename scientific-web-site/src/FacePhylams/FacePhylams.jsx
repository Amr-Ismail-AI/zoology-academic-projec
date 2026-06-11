import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhylum, setSearchTerm, toggleFavorite, setShowFavorites } from '../store/phylumSlice';
import "./FacePhylum.css";
import { Link } from "react-router-dom";
import AddPhylumForm from './AddPhylumForm';
import EditPhylumForm from './EditPhylumForm';

export default function FacePhylums() {
  const dispatch = useDispatch();
  const { phylums, searchTerm, favorites, showFavorites } = useSelector(state => state.phylums);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPhylum, setEditingPhylum] = useState(null);

  const filteredPhylums = phylums.filter(phylum => {
    const matchesSearch = phylum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phylum.characteristics.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorites = !showFavorites || favorites.includes(phylum.id);
    return matchesSearch && matchesFavorites;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this phylum?')) {
      dispatch(deletePhylum(id));
    }
  };

  return (
    <main>
        <div className="FacePhylums" id="phylums">
            <div className="container">
                <h1 className="title">Phylums</h1>
                <div className="search-section">
                  <input
                    type="text"
                    placeholder="Search by name or characteristics..."
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    className="search-input"
                  />
                  <div className="filter-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={showFavorites}
                        onChange={(e) => dispatch(setShowFavorites(e.target.checked))}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      Show only favorites
                    </label>
                  </div>
                </div>
                <div className="add-section">
                  <button onClick={() => setShowAddForm(true)} className="add-btn">Add Phylum</button>
                </div>
                {showAddForm && <AddPhylumForm onClose={() => setShowAddForm(false)} />}
                {editingPhylum && <EditPhylumForm phylum={editingPhylum} onClose={() => setEditingPhylum(null)} />}
                    <ul>
                    {filteredPhylums.map((phylum) => (
                        <li key={phylum.id} className="phylum-item">
                        <Link to={`/home/${phylum.id}`} className="phylum-link">
                            <h2>{phylum.name}</h2>
                            <img src={phylum.image} alt={phylum.name} />
                            <p>{phylum.meaning}</p>
                            <p>{phylum.commonName}</p>
                            <p>{phylum.characteristics}</p>
                        </Link>
                        <div className="actions">
                          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); dispatch(toggleFavorite(phylum.id)); }} className={`fav-btn ${favorites.includes(phylum.id) ? 'favorited' : ''}`}>
                            {favorites.includes(phylum.id) ? '★' : '☆'}
                          </button>
                          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditingPhylum(phylum); }} className="edit-btn">Edit</button>
                          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDelete(phylum.id); }} className="delete-btn">Delete</button>
                        </div>
                        </li>
                    ))}
                    </ul>
                
            </div>
        </div>
    </main>
  )
}
