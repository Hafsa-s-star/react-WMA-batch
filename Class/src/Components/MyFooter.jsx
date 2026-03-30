import React from 'react'


function MyFooter() {
  return (
    <>
      <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left Section */}
        <div>
          <h3 style={styles.logo}>MyApp</h3>
          <p style={styles.text}>
            Building modern web experiences 🚀
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4>Follow Us</h4>
          <div style={styles.icons}>
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        ©2026 MyApp | All Rights Reserved
      </div>
    </footer>
    </>
  )
}

export default MyFooter

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 20px",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  logo: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#ccc",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  icons: {
    display: "flex",
    gap: "10px",
    fontSize: "20px",
  },
  bottom: {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
    fontSize: "14px",
    color: "#aaa",
  },
};
