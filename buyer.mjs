import React, { useState } from 'react';

function MintNFT() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="mint-nft">
      <h2>Create an NFT</h2>
      <div className="collection">
        <label htmlFor="collection">Collection</label>
        <select name="collection" id="collection">
          <option value="">Choose a collection</option>
          <option value="collection1">Collection 1</option>
          <option value="collection2">Collection 2</option>
        </select>
      </div>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="media">
        <label htmlFor="media">Drag and drop media or Browse files</label>
        <input type="file" name="media" id="media" onChange={handleFileChange} />
        <p>Max size: 50MB. JPG, PNG, GIF, SVG, MP4</p>
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
      </div>
      <button type="submit">Create</button>
    </div>
  );
}

export default MintNFT;