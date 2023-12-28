import React, { useState } from 'react';
import { useDataContext } from './DataContext';

const DataEditor = () => {
  const { data, setData } = useDataContext();

  const [itemName, setItemName] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);

  const handleSave = () => {
    if (editingItemId !== null) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editingItemId ? { ...item, name: itemName } : item
        )
      );
      setEditingItemId(null);
    } else {
      setData((prevData) => [
        ...prevData,
        { id: prevData.length + 1, name: itemName },
      ]);
    }

    setItemName('');
  };

  const handleEdit = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    setItemName(selectedItem.name);
    setEditingItemId(itemId);
  };

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h2>Data Editor</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <button onClick={handleSave}>
          {editingItemId !== null ? 'Save Edit' : 'Add Item'}
        </button>
      </div>
    </div>
  );
};

export default DataEditor;
