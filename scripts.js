
async function getUsers() {
  
    const userListElement = document.getElementById('userList');
    
    try {
     
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
     
      if (!response.ok) {
        throw new Error('Could not get users');
      }
      
      
      const users = await response.json();
      
    
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userListElement.appendChild(listItem);
      });
      
    } catch (error) {
      
      console.error('Error:', error);
      userListElement.innerHTML = '<li>Could not load users. Please try again.</li>';
    }
  }
  
  window.addEventListener('load', getUsers);