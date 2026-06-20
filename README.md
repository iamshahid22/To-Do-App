# To-Do App

A simple, clean, and efficient to-do list application built with vanilla JavaScript. Stay organized and productive with a minimalist task management tool.

## 🌐 Live Demo

[**Try the To-Do App Now →**](https://iamshahid22.github.io/To-Do-App/)

## Features

✨ **Core Functionality**
- ✅ Add new tasks with ease
- ✓ Mark tasks as complete/incomplete
- 🗑️ Delete individual tasks
- 🧹 Clear all completed tasks at once
- 📊 Task counter (active vs. total)

💾 **Data Persistence**
- Local storage support - your tasks persist even after closing the browser
- Automatic saving of all changes

🎨 **User Experience**
- Clean and intuitive interface
- Responsive design
- Accessibility features (ARIA labels)
- Empty state message when no tasks exist
- Real-time task count updates

## Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML** | Structure and semantic markup (13.8%) |
| **CSS** | Styling and responsive design (48.5%) |
| **JavaScript** | Logic and interactivity (37.7%) |

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installations or dependencies required!

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamshahid22/To-Do-App.git
   cd To-Do-App
   ```

2. **Open the app**
   - Double-click `index.html` in your file explorer, or
   - Right-click `index.html` → Open with → Your browser

3. **Start adding tasks!**

## How to Use

1. **Add a Task**: Type in the input field and click "Add" (or press Enter)
2. **Mark Complete**: Click the checkbox next to any task
3. **Delete Task**: Click the "×" button to remove a task
4. **Clear Completed**: Click "Clear completed" to remove all finished tasks

## Project Structure

```
To-Do-App/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # App logic and functionality
└── README.md       # This file
```

## Key Implementation Details

### Local Storage
Tasks are automatically saved to the browser's local storage under the key `todo-app-tasks`. This means your tasks will persist even after closing and reopening the browser.

### Unique IDs
Each task is assigned a unique ID using the `crypto.randomUUID()` method, ensuring no conflicts when managing tasks.

### Security
- HTML special characters are escaped to prevent XSS attacks
- Input is trimmed to avoid empty or whitespace-only tasks

### Accessibility
- Proper ARIA labels for screen readers
- Semantic HTML structure
- Keyboard navigation support

## Code Highlights

**Add a new task:**
```javascript
tasks.push({
  id: crypto.randomUUID(),
  text,
  completed: false,
});
```

**Toggle task completion:**
```javascript
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  render();
}
```

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## Author

**@iamshahid22** - [GitHub Profile](https://github.com/iamshahid22)

---

**Enjoy organizing your tasks!** 🚀
