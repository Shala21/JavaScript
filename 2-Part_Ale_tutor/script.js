// Exercise 1: Basic User List
// Create a simple page that displays user information
// Requirements:
// - Fetch all users from https://jsonplaceholder.typicode.com/users
// - Use map() to create a list item for each user showing: name and email
// - Use filter() to show only users with .biz email domains
// - Display the filtered results in an unordered list <ul>
// - Add a paragraph showing the total count of filtered users


fetch('https://jsonplaceholder.typicode.com/users')     // -> used to make the request to the server
    .then(response => response.json())      // -> used to ask the server for user data
    .then(users => {        // -> here you have the user data
        const filtered = users.filter(u => u.email.endsWith('.biz'));       // -> Filters only users with .biz email
        const listItem = filtered.map(u => `<li>${u.name} -> ${u.email}</li>`);      // -> Creates <li> elements with name and email

        console.log(users);
        console.log(filtered);
        console.log(listItem);

        const ul = document.createElement('ul');       // -> Creates the list in the page
        ul.innerHTML = listItem.join('');      // -> Adds the <li> elements to the HTML page
        const p = document.createElement('p');      // -> Creates the paragraph in the page
        p.textContent = `Total users with .biz domain: ${filtered.length}`;      // -> Adds the text to the paragraph

        const container = document.getElementById('user-list');    // -> Adds everything to the div with id user-list in the HTML
        container.appendChild(p);
        container.appendChild(ul);
    })
    .catch(err => console.error('Error:', err));      // -> catches errors if there are


// Exercise 2: Todo Counter
// Build a todo statistics page
// Requirements:
// - Fetch todos from https://jsonplaceholder.typicode.com/todos
// - Use filter() to separate completed and incomplete todos
// - Use reduce() to count todos per user
// - Display in the DOM:
//   * Total number of todos
//   * Number of completed todos
//   * Number of incomplete todos
//   * User with most todos (use reduce() to find)
// - Show all results as simple text paragraphs


fetch('https://jsonplaceholder.typicode.com/todos')    // -> fetch() is used to make the request to the server
    .then(response => response.json())    // -> used to ask the server for todo data
    .then(todos => {
        const totalTodos = todos.length;     // -> counts total todos
        console.log(totalTodos);
        const completedTodos = todos.filter(t => t.completed === true);     // -> filters completed todos
        const incompletedTodos = todos.filter(t => t.completed !== true);     // -> filters cinompleted todos


        const countTotalTodos = todos.reduce((acc, u) => {      // -> count todos per user
            acc[u.userId] = (acc[u.userId] || 0) + 1;
            return acc;
        }, {});


        //  -> Problem with output -> User with most todos: 1 (20 todos)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let maxUserId = null;
        let maxCount = 0;
        
        for (const userId in countTotalTodos) {
            if (countTotalTodos[userId] > maxCount) {
                maxCount = countTotalTodos[userId];
                maxUserId = userId;
            }
        }

        console.log(completedTodos);
        console.log(countTotalTodos);

        const p1 = document.createElement('p');     //   -> Total number of todos
        p1.textContent = `Total number of to-do's: ${totalTodos}`;

        const p2 = document.createElement('p');     //   -> Number of completed todos
        p2.textContent = `Number of completed to-do's: ${completedTodos.length}`;

        const p3 = document.createElement('p');     //   -> Number of incomplete todos
        p3.textContent = `Number of completed to-do's: ${incompletedTodos.length}`;

        const p4 = document.createElement('p');
        p4.textContent = `User with most to-do's: ${maxUserId} (${maxCount} todos)`;//  -> Problem with output -> User with most todos: 1 (20 todos)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        const container = document.getElementById('todo-list');
        container.appendChild(p1);
        container.appendChild(p2);
        container.appendChild(p3);
        container.appendChild(p4);//  -> Problem with output -> User with most todos: 1 (20 todos)!!!!!!!!!!!!!!
    })
    .catch(err => console.log('error:', err));


// Exercise 3: Post Titles Search
// Create a searchable list of posts
// Requirements:
// - Fetch all posts from https://jsonplaceholder.typicode.com/posts
// - Create a text input for searching
// - Use filter() and includes() to search post titles
// - Display matching posts as a simple list showing only titles
// - Use forEach() to append results to the DOM
// - Show count of matching posts above the list

 let allPosts = [];

    // Fetch all posts from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        allPosts = posts; // save posts globally
        displayResults(posts); // initially show all posts
      })
      .catch(err => console.log('Error:', err));

    // Grab input and attach event listener
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();
      const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(keyword));
      displayResults(filteredPosts);
    });

    // Function to display posts in the DOM
    function displayResults(posts) {
      const results = document.getElementById('results');
      const count = document.getElementById('count');

      results.innerHTML = ''; // clear previous results
      count.textContent = `Matching posts: ${posts.length}`;

      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        results.appendChild(li);
      });
    }

// Exercise 4: Comments by Post
// Display posts with their comment counts
// Requirements:
// - Fetch posts from https://jsonplaceholder.typicode.com/posts (limit to first 10 using slice())
// - Fetch all comments from https://jsonplaceholder.typicode.com/comments
// - Use filter() to count comments for each post
// - Use map() to create list items showing:
//   * Post title
//   * Number of comments for that post
// - Display as a simple ordered list

async function displayPostsWithComments() {
      const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
      const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

      try {
        // Fetch both in parallel
        const [postsRes, commentsRes] = await Promise.all([
          fetch(postsUrl),
          fetch(commentsUrl)
        ]);

        if (!postsRes.ok) throw new Error(`Posts fetch failed: ${postsRes.status}`);
        if (!commentsRes.ok) throw new Error(`Comments fetch failed: ${commentsRes.status}`);

        const posts = await postsRes.json();
        const comments = await commentsRes.json();

        // Only first 10 posts
        const firstTenPosts = posts.slice(0, 10);

        // Create an ordered list
        const ol = document.createElement("ol");

        // Map posts -> list items with comment counts
        firstTenPosts.map(post => {
          const commentCount = comments.filter(c => c.postId === post.id).length;

          const li = document.createElement("li");
          li.textContent = `${post.title} (Comments: ${commentCount})`;
          ol.appendChild(li);
        });

        // Append list to container
        const container = document.getElementById("postsContainer");
        container.appendChild(ol);

      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    displayPostsWithComments();

// Exercise 5: Album and Photo Counter
// Create a summary page for albums and photos
// Requirements:
// - Fetch albums from https://jsonplaceholder.typicode.com/albums
// - Fetch photos from https://jsonplaceholder.typicode.com/photos
// - Use Promise.all() to fetch both simultaneously
// - Use reduce() to group photos by albumId
// - Use map() to display each album with:
//   * Album title
//   * Count of photos in that album
// - Use find() to identify the album with most photos
// - Display the album with most photos at the top as "Most Popular Album"
// - Show all albums as a simple list below