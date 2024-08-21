document.getElementById('userTaken').style.display='none'

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  
    
  // Get the values from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  
  
  // Check if username already exists
  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    document.getElementById('userTaken').style.display='block'
    return;
  } else {
    document.getElementById('userTaken').style.display='none'
  }
  
  // Save the new user
  users[username] = { password: password };
  localStorage.setItem('users', JSON.stringify(users));
  
  // Redirect or provide feedback
  window.location.href = '../index.html'; // Redirect to the login page
});
