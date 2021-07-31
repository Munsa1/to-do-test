import renderItems from './components.js';
import store from './todo-store.js';
import './style.css';

window.addEventListener('load', () => {
  document.getElementById('clear-btn').addEventListener('click', () => {
    store.clearCompleted();
  });

  const STORE_KEY = 'localstorage/todos';

  store.onUpdate(() => {
    renderItems(store.todos);
  });
  store.onUpdate(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store.todos));
  });
  const saved = localStorage.getItem(STORE_KEY);
  store.loadTodos(saved ? JSON.parse(saved) : []);
});