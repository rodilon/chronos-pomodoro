import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContextProvider } from './context/TaskContext';

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentCycle: number; // 1 a 8
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

const intialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(intialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
