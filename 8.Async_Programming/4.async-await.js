// Using async/await to fetch GitHub user data

let data  = fetch(`https://api.github.com/users/Rohan00001`);

console.log(data);

async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`User not found: ${username}`);
      }
      const data = await response.json();
      console.log('GitHub User Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function with a GitHub username
  fetchGitHubUser('Rohan00001');  // You can replace 'octocat' with any GitHub username
  