'use strict';
/* global prompt */
/* global fetch */
const userName = prompt('Enter your username');
let repoList = ['codeup-web-exercises'];
let fetchUrl = `https://api.github.com/repos/${userName}/${repoList}/contents`;

const isFile = path => {
  return (path.match(/^.*\./g));
};

const files = [];

const addFile = path => {
  return files.push(path);
};

const searcher = fetch(fetchUrl,
  {headers: {'Authorization': 'token 8c1b2f1f1e09d3acbeab7cf3c7a8012c0a152666'}
  }).then(response => response.json())
    .then(data => handleFiles(data));

const handleFiles = data => {
  let paths = data.map(({path}) => path);
  console.log(paths);
  for (let path of paths) {
    if (isFile) {
      addFile(path);
    } else {
      fetch(`${fetchUrl}/${path}`,
        {headers: {'Authorization': 'token 8c1b2f1f1e09d3acbeab7cf3c7a8012c0a152666'}
        }).then(handleFiles);
    }
  }
};

searcher(repoList);
