'use strict';
(global => {
  document.getElementById('searchBtn').addEventListener('click', () => {
    // Requires GitHub personal access token
    const key = 'token 4e26822530748c8ecfbcec1b3cc9239a06ac51bc';
    const repo = document.getElementById('repo').value;
    const user = document.getElementById('userName').value;
    const fetchUrl = `https://api.github.com/repos/${user}/${repo}/contents/`;

    // Tests if JSON object is file or directory
    // Very basic test that can be catered to specific needs
    const isFile = path => {
      return (path.match(/^.*\./g));
    };
    // Container for filenames stored as an array list
    const files = [];
    const addFile = path => {
      return files.push(path);
    };
    // Main API fetch request
    const searcher = fetchUrl => {
      fetch(fetchUrl, {
        headers: {
          'Authorization': `${key}`
        }
      }).then(response => response.json()).then(data => handleFiles(data));
    };
    // Recursive fetch request
    const handleFiles = data => {
      let paths = data.map(({path}) => path);
      for (let path of paths) {
        if (isFile(path)) {
          addFile(path);
          htmlAdd(path);
        } else {
          searcher(`${fetchUrl}${path}`);
        }
      }
    };
    // Function to add files to document
    const htmlAdd = path => {
      document.getElementById('contents').innerHTML += `<a href='https://raw.githubusercontent.com/${user}/${repo}/master/${path}' target='_blank'>${path}</a><br>`;
    };

    searcher(fetchUrl);
  });
})(window);
