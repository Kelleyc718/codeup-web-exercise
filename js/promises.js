'use strict';
{
  const key = 'token ENTER YOUR TOKEN KEY HERE';
  const userName = prompt('Enter your username');
  let repoList = prompt('Enter the name of your repo');
  let fetchUrl = `https://api.github.com/repos/${userName}/${repoList}/contents`;

  const isFile = path => {
    return (path.match(/^.*\./g));
  };

  const files = [];

  const addFile = path => {
    return files.push(path);
  };

  const searcher = fetchUrl => {
    fetch(fetchUrl,
    {headers: {'Authorization': `${key}`}})
      .then(response => response.json())
      .then(data => handleFiles(data));
  };

  const handleFiles = data => {
    let paths = data.map(({path}) => path);
    for (let path of paths) {
      if (isFile(path)) {
        addFile(path);
        htmlAdd(path);
      } else {
        searcher(`${fetchUrl}/${path}`);
      }
    }
  };

  const htmlAdd = path => {
    document.getElementById('files').innerHTML += `${path}<br>`;
  };

  searcher(fetchUrl);
  console.log(files);
}
