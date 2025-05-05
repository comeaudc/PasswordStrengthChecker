import { useState } from 'react';
import Banner from './Banner';

function PasswordStrengthChecker() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null);

  function handleChange(e) {
    // Regex Pattern
    const regexWeak = /^(?=.*[a-zA-Z])(?=.*\d).*$/; // At least one letter and one number
    const regexStr = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/; // At least one letter, one number, and one special character

    // Banner Variables
    let msg = '';
    let color = '';

    if (e.target.name == 'password') {
      let pw = e.target.value;

      if (pw.length < 6 || !regexWeak.test(pw)) {  
        // Less than 6 characters OR doesn't include both letters and numbers
        msg = "Password is less than 6 characters. Needs both letters and numbers.";
        color = "red";
    
      } else if (pw.length < 8 && regexWeak.test(pw)) {  
        // Between 6-7 characters AND includes both letters and numbers
        msg = "Password contains at least 6 characters and includes both letters and numbers.";
        color = "orange";
    
      } else if (pw.length >= 8 && regexStr.test(pw)) {  
        // 8+ characters AND includes letters, numbers, and special characters
        msg = "Password contains at least 8 characters and includes letters, numbers, and special characters.";
        color = "green";
    
      } else if (pw.length >= 8 && regexWeak.test(pw)) {  
        // 8+ characters but **missing** a special character
        msg = "Password contains at least 8 characters and includes letters and numbers, but is missing a special character.";
        color = "orange";
      }
    }

    setMessage(<Banner msg={msg} color={color} />);
    setTimeout(()=>{setMessage(null)}, 2000)

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
