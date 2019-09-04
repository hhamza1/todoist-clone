import  { useState, userEffect} from 'react';
import { firebase } from "../firebase";
import { collatedTasksExist } from '../helpers';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '6XSwj8x6KIRuMK5JeufB');
      unsubscribe = selectedProject && !collatedTasksExist(selectedProject) 
      ?(unsubscribe = unsubscribe.where('projectId', '==',selectedProject))
      : selectedProject === 'Today'
      ? (unsubscribe = unsubscribe.where(
          'date',
          '==', 
          moment().format('DD/MM/YYYY')
        ))
      : selectedProject = 'INBOX' || selectedProject === 0
      ? (unsubscribe = unsubscribe.where('date', '==',''))
      :unsubscribe;
    }, [selectedProject]);
}