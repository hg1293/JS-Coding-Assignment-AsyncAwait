// Q.1//


function fetchUserData(userId, callback) {
  // make an API request to fetch user data
  // assume the response is an object with user data properties
  const userData = {
    name: "John Smith",
    email: "john@example.com",
    phone: "555-555-5555"
  };

  // call the callback function with the user data as an argument
  callback(userData);
}

function displayUserData(userData) {
  // display the user data in the console
  console.log(`Name: ${userData.name}`);
  console.log(`Email: ${userData.email}`);
  console.log(`Phone: ${userData.phone}`);
}

// call the fetchUserData function and pass in the displayUserData function as the callback
fetchUserData(123, displayUserData);


// Q.2

function printNumbersWithDelay(callback) {
  let i = 1;

  function printNumber() {
    console.log(i);
    i++;

    if (i <= 7) {
      setTimeout(printNumber, i * 1000);
    } else {
      callback();
    }
  }

  setTimeout(printNumber, i * 1000);
}

function callbackFunction() {
  console.log('Done printing numbers');
}

printNumbersWithDelay(callbackFunction);


// Q.3

function printNumbersWithDelay() {
  let i = 1;

  function printNumber() {
    console.log(i);
    i++;

    if (i <= 7) {
      return new Promise(resolve => {
        setTimeout(resolve, i * 1000);
      }).then(printNumber);
    } else {
      return Promise.resolve();
    }
  }

  return printNumber();
}

printNumbersWithDelay().then(() => {
  console.log('Done printing numbers');
});


// Q.4

function promiseFunction(input) {
  return new Promise((resolve, reject) => {
    if (input === 'yes') {
      resolve('Promise Resolved');
    } else {
      reject('Promise Rejected');
    }
  });
}

promiseFunction('yes')
  .then(result => console.log(result))
  .catch(error => console.error(error));

promiseFunction()
  .then(result => console.log(result))
  .catch(error => console.error(error));


  // Q.5

  function addNumbers(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
  }
  
  function printSum(sum) {
    console.log(`The sum is ${sum}`);
  }
  
  addNumbers(5, 3, printSum); // prints "The sum is 8"

  
  // Q.6

  function getUser(id, callback) {
    setTimeout(() => {
      const user = { id, name: 'Alice' };
      callback(user);
    }, 1000);
  }
  
  function getPosts(user, callback) {
    setTimeout(() => {
      const posts = [
        { id: 1, title: 'Post 1', author: user.name },
        { id: 2, title: 'Post 2', author: user.name },
        { id: 3, title: 'Post 3', author: user.name },
      ];
      callback(posts);
    }, 1000);
  }
  
  function getComments(post, callback) {
    setTimeout(() => {
      const comments = [
        { id: 1, text: 'Comment 1', author: 'Bob' },
        { id: 2, text: 'Comment 2', author: 'Charlie' },
      ];
      callback(comments);
    }, 1000);
  }
  
  getUser(1, user => {
    getPosts(user, posts => {
      getComments(posts[0], comments => {
        console.log(`User: ${user.name}`);
        console.log(`Post: ${posts[0].title}`);
        console.log(`Comments: ${comments.map(c => c.text).join(', ')}`);
      });
    });
  });

  // Q.7

  function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id, name: 'Alice' };
        resolve(user);
      }, 1000);
    });
  }
  
  function getPosts(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'Post 1', author: user.name },
          { id: 2, title: 'Post 2', author: user.name },
          { id: 3, title: 'Post 3', author: user.name },
        ];
        resolve(posts);
      }, 1000);
    });
  }
  
  function getComments(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const comments = [
          { id: 1, text: 'Comment 1', author: 'Bob' },
          { id: 2, text: 'Comment 2', author: 'Charlie' },
        ];
        resolve(comments);
      }, 1000);
    });
  }
  
  getUser(1)
    .then(user => {
      console.log(`User: ${user.name}`);
      return getPosts(user);
    })
    .then(posts => {
      console.log(`Post: ${posts[0].title}`);
      return getComments(posts[0]);
    })
    .then(comments => {
      console.log(`Comments: ${comments.map(c => c.text).join(', ')}`);
    })
    .catch(error => {
      console.error(error);
    });

    
    // Q.8

    function getUser(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = { id, name: 'Alice' };
          resolve(user);
        }, 1000);
      });
    }
    
    function getPosts(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const posts = [
            { id: 1, title: 'Post 1', author: user.name },
            { id: 2, title: 'Post 2', author: user.name },
            { id: 3, title: 'Post 3', author: user.name },
          ];
          resolve(posts);
        }, 1000);
      });
    }
    
    function getComments(post) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const comments = [
            { id: 1, text: 'Comment 1', author: 'Bob' },
            { id: 2, text: 'Comment 2', author: 'Charlie' },
          ];
          resolve(comments);
        }, 1000);
      });
    }
    
    async function showComments() {
      try {
        const user = await getUser(1);
        console.log(`User: ${user.name}`);
    
        const posts = await getPosts(user);
        console.log(`Post: ${posts[0].title}`);
    
        const comments = await getComments(posts[0]);
        console.log(`Comments: ${comments.map(c => c.text).join(', ')}`);
      } catch (error) {
        console.error(error);
      }
    }
    
    showComments();
    

    // Q.9

    function getUser(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = { id, name: 'Alice' };
          resolve(user);
        }, 1000);
      });
    }
    
    function getPosts(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const posts = [
            { id: 1, title: 'Post 1', author: user.name },
            { id: 2, title: 'Post 2', author: user.name },
            { id: 3, title: 'Post 3', author: user.name },
          ];
          resolve(posts);
        }, 1000);
      });
    }
    
    function getComments(post) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const comments = [
            { id: 1, text: 'Comment 1', author: 'Bob' },
            { id: 2, text: 'Comment 2', author: 'Charlie' },
          ];
          resolve(comments);
        }, 1000);
      });
    }
    
    async function showComments() {
      try {
        const user = await getUser(1);
        const posts = await getPosts(user);
    
        const promises = posts.map(post => getComments(post));
        const commentsArrays = await Promise.all(promises);
    
        const comments = commentsArrays.flat();
        console.log(`Comments: ${comments.map(c => c.text).join(', ')}`);
      } catch (error) {
        console.error(error);
      }
    }
    
    showComments();
    