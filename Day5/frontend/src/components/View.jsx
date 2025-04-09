import React, { useEffect, useState } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    const res = await axios.get('http://localhost:9000/users');
    setUsers(res.data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Registered Users List</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.theadRow}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id} style={styles.row}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fce4ec",
    padding: "40px",
    textAlign: "center"
  },
  heading: {
    color: "#ad1457",
    marginBottom: "20px"
  },
  table: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
  },
  theadRow: {
    backgroundColor: "#ad1457",
    color: "white"
  },
  row: {
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff"
  }
};

export default View;
