import ReactDOM from 'react-dom';

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

// plug this into a componentDidMount and pass in 'this'
// light alternative to ReactCSSTransitionGroup route animations
export function transition (component) {
  const elem = ReactDOM.findDOMNode(component);
  elem.style.opacity = 0;
  elem.style.transform = "translateY(100px)";
  window.requestAnimationFrame(function() {
      elem.style.transition = "all 500ms";
      elem.style.opacity = 1;
      elem.style.transform = "translateY(0px)";
  });
}

// used for catching promise Errors
// and updating validation message state
export function errCatch(error) {
    console.log(error);
    // Handle Errors here
    return {
      validation: true,
      error: handleMessage(error.code)
    };
}

// Used for appending a unique string to
// the username to prevent
// accessing another user's notes
export function secureUsername(username) {
  return username = `${username.toLowerCase()}-${Date.now()}`;
}

// Deconstruct secureusername into the user's
// original input for frontend purposes
export function displayUsername(username) {
  const pos = username.lastIndexOf('-');
  return username.split('', pos).join('');
}

export function formatTitle(text) {
  const textArr = text.split(' ');
  return textArr[0];
}

// used for tooltip text output
export function decideString(str) {
  console.log(str);
  switch(str) {
    case 'add':
      return 'to add a note.';
    case 'edit':
      return 'to edit a note.';
    case 'remove':
      return 'to delete a note.';
    case 'hover':
      return "to see options to remove, edit, or view a note's contents.";
    default:
      return '';
  }
}
