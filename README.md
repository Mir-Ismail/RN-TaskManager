Task Manager - React Native (Expo for Web)
Overview
A simple, minimal Task Manager application built using React Native with Expo and designed to run directly
in the web browser.
It allows users to add, toggle (complete/incomplete), and delete tasks ideal for productivity and to-do
tracking.
Features
Add new tasks with a single input
Mark tasks as completed/incomplete
Delete tasks
Clean, mobile-friendly responsive UI
Built entirely with React Native + Expo for Web
Project Structure
MyFirstApp/
app/
(tabs)/index.tsx # Main screen (Task manager UI)
components/
TaskItem.tsx # Task UI component
types/
Task.ts # Task type definition
assets/ # Static assets
.gitignore
app.json
Task Manager - React Native (Expo for Web)
package.json
README.md
Tech Stack
- React Native
- Expo
- TypeScript
- React Native Web
- react-native-uuid (for unique task IDs)
Installation & Running the Project
1. Clone the Repository
git clone https://github.com/your-username/task-manager-react-native-web.git
cd task-manager-react-native-web
2. Install Dependencies
npm install
3. Start the Project (Web)
npx expo start --web
Then open the browser at: http://localhost:19006
Future Enhancements
Task Manager - React Native (Expo for Web)
- Save tasks in local storage (AsyncStorage or browser localStorage)
- Task editing
- Filter tasks (All / Completed / Incomplete)
- Dark/light theme toggle
- Deploy to GitHub Pages or Vercel (web)
License
This project is open-source and available under the MIT License.
Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.
