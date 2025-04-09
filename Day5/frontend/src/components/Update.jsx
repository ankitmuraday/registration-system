import React from 'react';
import axios from 'axios';

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    await axios.put(`http://localhost:9000/users/${id}`, data);
    alert("Success");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Update User</h1>
      <form onSubmit={handleupdate} style={styles.form}>
        <label>ID:</label>
        <input type="text" name="id" style={styles.input} />
        <label>Name:</label>
        <input type="text" name="name" style={styles.input} />
        <label>Age:</label>
        <input type="text" name="age" style={styles.input} />
        <button type="submit" style={styles.button}>Update</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fffde7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    color: "#f57f17",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px"
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "8px",
    backgroundColor: "#f57f17",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Update;
