import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './TaskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case 'START_TASK':
      return state;
    case 'INTERRUPT_TASK':
      return state;

    default:
      return state;
  }
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    };

export type TaskActionsWithoutPayload = {
  type: TaskActionTypes.RESET_STATE;
};

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
