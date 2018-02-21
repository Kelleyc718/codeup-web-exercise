const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Chris';
const email = 'kelleyc718@gmail.com';
const languages = ['English'];

const person = {name, email, languages};

let emails = [];
let names = [];

users.forEach(user => {
  return emails.push(user.email);
});

users.forEach(user => {
  return names.push(user.name);
});

let developers = [];
users.forEach(user =>
  developers.push(`${user.name}'s email is ${user.email} and knows ${user.languages.join(',')}`)
);

let list = '<ul>';

for (let developer of developers) {
  list += `<li>${developer}</li>`;
}
list += '</ul>';
