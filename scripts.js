async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        userList.innerHTML = '<li>Error loading user data. Please try again later.</li>';
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email} - ${user.address.city}`;
        userList.appendChild(li);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchUsers);