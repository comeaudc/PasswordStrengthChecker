import { useState } from 'react';
import Banner from './Banner';

function PasswordStrengthChecker() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null);


  function handleChange(e) {

    // Reged Pattern
    let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/;
    // Banner Variables
    let msg = '';
    let color = '';

    if (e.target.name == 'password') {

      let pw = e.target.value;

      
      if (pw.length < 6 || !regex.test(pw)) { // if less than 6 charachters or fails any regex test

        msg = 'Password is less than 6 characters.';
        color = 'red';

      } else if (pw.length < 8 && regex.test(pw)) { //passes regex test && between 6-8

        msg = ' Password contains at least 6 characters and includes both letters and numbers.';
        color = 'Orange';

      } else if (regex.test(pw)) { // 8 or greater characters and passes regex test

        msg = 'Password contains at least 8 characters and includes letters, numbers, and special characters.';
        color = 'Green';

      }
    }

    setMessage(<Banner msg={msg} color={color} />);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form>
        <h2>Log In</h2>
        <input
          type='text'
          onChange={handleChange}
          name='email'
          placeholder='Email...'
        />
        <br />
        <input
          type='password'
          onChange={handleChange}
          name='password'
          placeholder='Password...'
        />
        <br />
        <input type='submit' />
      </form>
      {message && message}
    </>
  );
}

export default PasswordStrengthChecker;
