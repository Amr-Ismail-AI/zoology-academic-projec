import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./PhylumDetail.css"
import { motion } from "motion/react";
import EditPhylumForm from '../FacePhylams/EditPhylumForm';

export default function PhylumDetail() {
  const { PhylumId } = useParams();
  const phylums = useSelector(state => state.phylums.phylums);
  const [editingPhylum, setEditingPhylum] = useState(null);

  const phylumDetail = phylums.find((p) => p.id === PhylumId);

  if (!phylumDetail) {
    return <p>Phylum not found</p>;
  }

  return (
    <motion.main
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
      <div className="container">
        <div className="head">
          <h1 className="title">{phylumDetail.name}</h1>
          <button onClick={() => setEditingPhylum(phylumDetail)} className="edit-btn">Edit Phylum</button>
          <img src={phylumDetail.image} alt={phylumDetail.name} />
        </div>

        <div className="text">
          {phylumDetail.meaning && (
            <h2>
              Meaning: <span>{phylumDetail.meaning}</span>
            </h2>
          )}
          {phylumDetail.commonName && (
            <h2>
              Common Name: <span>{phylumDetail.commonName}</span>
            </h2>
          )}
          {phylumDetail.characteristics && (
            <p>
              Characteristics: <span>{phylumDetail.characteristics}</span>
            </p>
          )}
          {phylumDetail.article && <p>{phylumDetail.article}</p>}
        </div>

        <a href={phylumDetail.link} target="_blank" rel="noopener noreferrer">
          Read More ...
        </a>
      </div>
      {editingPhylum && <EditPhylumForm phylum={editingPhylum} onClose={() => setEditingPhylum(null)} />}
    </motion.main>
  );
}