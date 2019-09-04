import {collatedTasksExist} from '../constants';
export collatedTasksExist = selectedProject => {
    collatedTasksExist.find(task => task.key ===selectedProject);
}