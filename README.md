2:16
Password Strength Checker
Objective:
Create a password input field that evaluates the strength of a user's password and provides feedback on the strength (e.g., weak, medium, strong) based on the complexity of the password entered.
Requirements:

- Create a functional component called PasswordStrengthChecker.
- Use useState to manage the state for the password input.
- Create a password input field.
- Implement an onChange handler for the password input that evaluates the strength of the password.
- Display a message below the input that shows the strength of the password.
- Use basic password strength rules:
  - Weak: Password is less than 6 characters.
  - Medium: Password contains at least 6 characters and includes both letters and numbers.
  - Strong: Password contains at least 8 characters and includes letters, numbers, and special characters.
- Style the strength message with color:
- Red for Weak
- Orange for Medium
- Green for Strong
