const taskName = document.getElementById('taskname');
const submit = document.getElementById('submit');
const ul = document.getElementById('list-container')
const taskArrray = []

function getTodo() {
    while (taskName.value == '') {
        alert('Pleae enter a task !!')
        return
    }
    const taskObject = {}
    taskObject.nameOftask = taskName.value;
    taskObject.taskId = taskArrray.length + 1
    console.log(taskObject)
    taskArrray.push(taskObject)
    console.log(taskArrray)
}

function deleteTask(event) {
    debugger;
    let index = taskArrray.findIndex(m => m.taskId == event.target.taskId)
    taskArrray.splice(index, 1);
    rendertaskList() 
}

function editTask(event) {
    debugger;
    let obj = taskArrray.find(m => m.taskId == event.target.taskId)
    let index = taskArrray.findIndex(m => m.taskId == event.target.taskId)
    taskName.value = obj.nameOftask
    taskArrray.splice(index, 1);
    rendertaskList()
}

function rendertaskList() {
    ul.innerHTML = '';
    for (let index = 0; index < taskArrray.length; index++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.setAttribute('class', 'item-wrapper');
        const li = document.createElement('li');
        li.setAttribute('class', 'task');
        li.innerHTML = taskArrray[index].nameOftask;
        const span = document.createElement('span');
        span.setAttribute('class', 'btn-wrapper');
        const editBtn = document.createElement('button');
        editBtn.addEventListener('click', editTask)
        editBtn.taskId = taskArrray[index].taskId
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit'
        const deletebtn = document.createElement('button');
        deletebtn.addEventListener('click', deleteTask)
        deletebtn.taskName = taskArrray[index].taskId
        deletebtn.setAttribute('class', 'delete-btn');
        deletebtn.textContent = 'Delete'
        deletebtn.taskId = taskArrray[index].taskId
        ul.appendChild(itemWrapper);
        itemWrapper.appendChild(li);
        itemWrapper.appendChild(span);
        span.appendChild(editBtn)
        span.appendChild(deletebtn)
    }
}



const submitTask = () => {
    getTodo()
    rendertaskList()
    taskName.value = ''
}
submit.addEventListener('click', submitTask)