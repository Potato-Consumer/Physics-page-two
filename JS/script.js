document.getElementById('invalidUsername').style.display='none'

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;


  // Retrieve stored users
  let users = JSON.parse(localStorage.getItem('users')) || {};

  // Validate user
  if (users[username] && users[username].password === password) {
    // Redirect or handle successful login
    window.location.href = '../Html-Folder/Welcome.html'; // Example redirect on successful login
  } else {
    document.getElementById('invalidUsername').style.display='block'
      return;
  }
});
