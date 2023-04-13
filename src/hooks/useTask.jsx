import { useState, useEffect } from 'react';

export function useTask(){

    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [
        {name :"Buy a new Gaming laptop", id: 1, descripcion : "quote costs", done : false},
        {name :"Complete a previous task", id: 2, descripcion : "reviewing past activities", done : true},
        {name :"Create a video for YouTube", id: 3, descripcion : "think of video ideas", done : false},
        {name :"Create a new portfolio site", id: 4, descripcion : "think of business ideas", done : false},
      ]);

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text, description){
        if(text !== null && text.length > 0){
        setTasks(
            tasks.concat({name: text, id: tasks.length + 1, descripcion: description, done: false})
        );
        }
        else{
            alert("Task cannot be empty");
        }
    }

    function editTask(taskId, text){
        setTasks(tasks.map((task) => {
            if (task.id === taskId) return {...task, name: text};
                return task;
            })
        );
    }

    function deleteTask(taskId){
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        );
    }

    function taskDone(taskId){
        setTasks(
            tasks.map((task) => {
            if (task.id === taskId) return {...task, done: !task.done};
              return task;
            })
        );
    }

    return [tasks, addTask, editTask, deleteTask, taskDone];
}