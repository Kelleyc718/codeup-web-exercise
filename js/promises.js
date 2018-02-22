'use strict';
/* global prompt */
/* global fetch */
{
  const userName = prompt('Enter your username');

/*
  const wait = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve('winning');
        } else {
          reject(new Error('something bad happened'));
        }
      }, num);
    });
  };
  wait(1000).then(() => console.log('You\'ll see this after second.'));
  wait(3000).then(() => console.log('You\'ll see this after 3 seconds.'));
*/

  const lastCommit = userName => {
    fetch(`https://api.github.com/repos/${userName}/codeup-web-exercises/commits`,
      {headers: {'Authorization': 'token xxx'}
      }).then(response => response.json())
        .then(data => (document.getElementById('tagline').innerHTML += data[0].commit.author.date))
        .catch(error => console.error(error));
  };
  lastCommit(userName);
}
