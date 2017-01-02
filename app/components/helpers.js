// This passes the message to the button to be displayed
export function handleValidation (initial, message, validation) {
  if ( validation === true ) {
    return message;
  }
  return initial
}

// This is used to decide what message to display
// in the button validation
export function handleMessage (error) {
  if (error === 'auth/email-already-in-use') {
    return 'Email already registered.'
  }
  if (error === 'auth/weak-password') {
    return 'Password must be atleast 6 characters.'
  }
  if (error === 'auth/invalid-email') {
    return 'You must enter a valid email.'
  }
  if (error === "auth/wrong-password") {
    return 'Please enter a valid password.';
  }
  return initial;
}
