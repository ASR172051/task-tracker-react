# Enhanced Task Tracker

A modern, feature-rich task management application built with React, featuring an elegant dark theme, real-time analytics, and category management.

![Task Tracker](screenshot.png)

## 🌟 Features

### Core Features
- ✅ Track daily tasks and activities
- 📊 Real-time statistics and analytics
- 🏷️ Category-based task organization
- 🎯 Task completion tracking
- 💾 Local storage persistence
- 🌓 Dark theme with animated gradients
- 📱 Fully responsive design

### Enhanced Statistics
- 📈 Task completion trends
- 🎯 Category-wise task distribution
- 💫 Animated progress indicators
- 📊 Detailed task metrics

### User Experience
- 🎨 Sleek, modern interface
- ⚡ Smooth animations and transitions
- 🔍 Task search and filtering
- ⌨️ Keyboard shortcuts
- 🎯 Auto-hiding task forms
- 📱 Mobile-friendly design

## 🚀 Tech Stack

- React 18
- Chart.js for data visualization
- Material-UI Icons
- date-fns for date handling
- Modern CSS3 with animations
- Local Storage API

## 🛠️ Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📝 Usage

1. Add new tasks by clicking "+ Add Task"
2. Categorize tasks (Personal, Work, Health, etc.)
3. Mark tasks as complete with checkboxes
4. View task statistics in the dashboard
5. Search and filter tasks by category
6. Monitor task progress with visual charts

## 🎨 Customization

### Theme Colors
- Primary: rgba(127, 19, 135, 0.8)
- Background: Dark gradient
- Accents: Various translucent purples

### Adding Categories
Edit `HabitContext.jsx` to modify available categories:
```jsx
const [categories] = useState([
  'Personal', 'Work', 'Health', 'Learning', 'Fitness'
]);
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: Below 768px

## 🔮 Future Enhancements

- [ ] Cloud sync capabilities
- [ ] Multiple theme options
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Export/import functionality
- [ ] Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- React Team
- Chart.js Community
- Material-UI Team
- Open Source Community