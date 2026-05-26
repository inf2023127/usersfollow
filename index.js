const users = [];

// CREATE USER
function createUser(username, email) {
  const user = {
    username,
    email,
    followers: [],
    following: [],
  };

  users.push(user);
}

// FOLLOW USER
function followUser(user, target) {
  const u = users.find((x) => x.username === user);
  const t = users.find((x) => x.username === target);

  if (!u || !t) return;

  if (!u.following.includes(target)) {
    u.following.push(target);
    t.followers.push(user);
  }
}

// TEST DATA
createUser("john", "john@email.com");
createUser("anna", "anna@email.com");
createUser("mike", "mike@email.com");

followUser("john", "anna");
followUser("mike", "anna");

// SHOW USERS
const output = document.getElementById("output");

users.forEach((user) => {
  output.innerHTML += `
    <div class="user-card">
      <div class="username">${user.username}</div>
      <div class="email">${user.email}</div>

      <div class="stats">
        <div>Followers: ${user.followers.length}</div>
        <div>Following: ${user.following.length}</div>
      </div>
    </div>
  `;
});
