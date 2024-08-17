import Header from "../components/Header";

const styles = {
  button: {
    padding: "10px",
    background: 'green',
    color: 'white',
    border: '4px',
    cursor: 'pointer',
    font: '16px',
    margin: '0px 0px 0px 20px',
  },
  mySkills: {
    font: '36px',
    padding: "50px"
  }
};

export default function Resume() {

  return (
    <>
      <Header />
      <h1 className="pageTitle">My Resumé</h1>
      <button style={styles.button} type="submit">Download PDF</button>
      <p style={styles.mySkills}>My Skills
        <ul>
          <li>Javascript</li>
          <li>C++</li>
          <li>C#</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </p>
    </>
  );
}
