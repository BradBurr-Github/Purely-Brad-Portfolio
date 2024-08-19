import { useState } from 'react';
import { validateEmail } from './utils/helpers';

const styles = {
  input: {
    padding: '10px',
    margin: '2px 2px 20px 0px',
    border: '1px solid #ccc',
    box: 'border-box',
    width: "300px"
  },
  button: {
    padding: "12px",
    width: "300px",
    background: 'green',
    color: 'white',
    border: '4px',
    cursor: 'pointer',
    font: '16px',
  }, 
};

function Contact() {
  
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either username, email, and message
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // const handleFocusOut = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputType = target.name;

  //   if (inputType === 'userName' && !userName) {
  //     setErrorMessage('Please enter a username to continue.');
  //     return;
  //   } else if (inputType === 'email' && !email) {
  //     setErrorMessage('Please enter an email address to continue.');
  //     return;
  //   } else {
  //     setErrorMessage('Please enter a message to continue.');
  //     return;
  //   }
  // };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if(!userName) {
      setErrorMessage('Please enter a username to continue.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('The Email you entered is invalid.');
      return;
    }
    if(!message) {
      setErrorMessage('Please enter a message to continue.');
      return;
    }
    alert(`Email was sent to: ${email}  (but not really...)`);

    // If everything goes according to plan, we want to clear out the input after a successful submission
    setUserName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name:</label><br/>
        <input
          value={userName}
          style={styles.input}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <br/>
        <label>Email:</label><br/>
        <input
          value={email}
          style={styles.input}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <br/>
        <label>Message:</label><br/>
        <textarea
          value={message}
          style={styles.input}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <br/>
        <button style={styles.button} type="submit">Submit</button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
  
export default Contact;