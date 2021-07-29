import './style.css';

let taskContainer = document.querySelector('#toDoList');
let taskList = [
    {
        id: 1,
        text: 'Wash clothes',
        completed: false,
    },
    {
        id: 2,
        text: 'Message mails',
        completed: false,
    },
    {
        id: 3,
        text: 'Put gas in genset ',
        completed: false,
    },
    {
        id: 4,
        text: 'Attend the stand up meeting',
        completed: false,
    }
];

taskList.forEach((item) => {
    taskContainer.innerHTML  += `
    <li class = "list-items"> ${item.text} <li>
    `
});



