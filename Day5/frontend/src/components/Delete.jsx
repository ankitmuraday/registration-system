import React from 'react';
import axios from 'axios';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`http://localhost:9000/users/${id}`);
    alert('Product deleted successfully');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Delete Product</h1>
      <form onSubmit={handleDelete} style={styles.form}>
        <input type="text" placeholder="Enter Product ID" name="id" style={styles.input} />
        <button type="submit" style={styles.button}>Delete</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#e3f2fd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    color: "#d32f2f",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "8px",
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Delete;
