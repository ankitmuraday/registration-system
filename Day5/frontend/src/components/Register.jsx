import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value
    };
    await axios.post("http://localhost:9000/users", user);
    alert("User registered successfully!!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register User</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <label>Name:</label>
        <input type="text" name="name" style={styles.input} />
        <label>Age:</label>
        <input type="text" name="age" style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f1f8e9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    color: "#388e3c",
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
    backgroundColor: "#388e3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Register;
