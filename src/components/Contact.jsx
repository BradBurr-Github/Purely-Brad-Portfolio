import { useState } from 'react';
import Footer from './Footer';
//import { checkPassword, validateEmail } from '../../utils/helpers';

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
  // const [email, setEmail] = useState('');
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   // Based on the input type, we set the state of either email, username, and password
  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'userName') {
  //     setUserName(inputValue);
  //   } else {
  //     setPassword(inputValue);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   if (!validateEmail(email) || !userName) {
  //     setErrorMessage('Email or username is invalid');
  //     // We want to exit out of this code block if something is wrong so that the user can correct it
  //     return;
  //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  //   }
  //   if (!checkPassword(password)) {
  //     setErrorMessage(
  //       `Choose a more secure password for the account: ${userName}`
  //     );
  //     return;
  //   }
  //   alert(`Hello ${userName}`);

  // If everything goes according to plan, we want to clear out the input after a successful registration.
  // setUserName('');
  // setPassword('');
  // setEmail('');

  return (
      <div className="container text-center">
      <form className="form" >

      {/* onSubmit={handleFormSubmit}> */}

        <label>Name:</label><br/>
        <input
          //value={userName}
          style={styles.input}
          name="userName"
          //onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <br/>
        <label>Email:</label><br/>
        <input
          //value={email}
          style={styles.input}
          name="email"
          //onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <br/>
        <label>Message:</label><br/>
        <textarea
          //value={email}
          style={styles.input}
          name="message"
          //onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <br/>
        
        <button style={styles.button} type="submit">Submit</button>
      </form>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
      <Footer />
    </div>
  );
}
  
export default Contact;