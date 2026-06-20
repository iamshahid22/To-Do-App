const STORAGE_KEY = "todo-app-tasks";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const clearCompletedBtn = document.getElementById("clear-completed");

let tasks = loadTasks();

render();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });

  taskInput.value = "";
  saveTasks();
  render();
});

taskList.addEventListener("click", (event) => {
  const item = event.target.closest(".task-item");
  if (!item) return;

  const id = item.dataset.id;

  if (event.target.matches(".task-checkbox")) {
    toggleTask(id);
  }

  if (event.target.matches(".delete-btn")) {
    deleteTask(id);
  }
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  render();
});

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  render();
}

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="empty-state">No tasks yet. Add one above!</li>`;
  } else {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item${task.completed ? " completed" : ""}`;
      li.dataset.id = task.id;

      li.innerHTML = `
        <input
          type="checkbox"
          class="task-checkbox"
          ${task.completed ? "checked" : ""}
          aria-label="Mark task complete"
        />
        <span class="task-text">${escapeHtml(task.text)}</span>
        <button type="button" class="delete-btn" aria-label="Delete task">&times;</button>
      `;

      taskList.appendChild(li);
    });
  }

  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.length - activeCount;

  taskCount.textContent =
    tasks.length === 0
      ? "0 tasks"
      : `${activeCount} active · ${tasks.length} total`;

  clearCompletedBtn.hidden = completedCount === 0;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
