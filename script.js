

window.addEventListener('load', () => {
    const addBtn = document.querySelector("#add")
    const input = document.querySelector('#task')
    let margin = "8px"
    input.style.margin = margin

    addBtn.addEventListener('click', () => {
        if (input.value) {
            addTask(input.value.trim())
            input.value = ""
            return
        } else {
            alert(`Please enter a task.`)
        }
    })


    function addTask(data) {

        let inputMargin = "8px"
        let btnMargin = "5px"
        let borderRadius = "8px"
        let taskMargin = "3px 8px"
        let taskRadius = "3px"

        const tasks = document.querySelector("#tasks")
        const task = document.createElement('div')
        const btnHolders = document.createElement('div')
        const enteredTask = document.createElement("textarea")
        const editBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")

        btnHolders.appendChild(editBtn)
        btnHolders.appendChild(deleteBtn)

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === "Save changes") {
                editBtn.textContent = "Edit"
                enteredTask.style.border = "none"
                enteredTask.readOnly = true

            } else {
                editBtn.textContent = "Save changes"
                enteredTask.style.border = ""
                enteredTask.readOnly = false

            }

        })

        deleteBtn.addEventListener('click', () => {
            let task = deleteBtn.parentElement.parentElement
            task.remove()
        })

        enteredTask.style.margin = inputMargin
        enteredTask.value = data
        enteredTask.readOnly = true
        enteredTask.style.border = "none"

        editBtn.style.borderRadius = borderRadius
        editBtn.style.margin = btnMargin
        editBtn.style.background = "green"
        editBtn.textContent = "Edit"
        editBtn.style.color = "white"

        deleteBtn.style.borderRadius = borderRadius
        deleteBtn.style.margin = btnMargin
        deleteBtn.style.background = "red"
        deleteBtn.textContent = "Delete"
        deleteBtn.style.color = "white"

        task.appendChild(enteredTask)
        task.appendChild(btnHolders)

        // task.appendChild(editBtn)
        // task.appendChild(deleteBtn)

        tasks.appendChild(task)
        task.style.border = "grey 1px solid"
        task.style.width = "fit-content"
        task.style.margin = taskMargin
        task.style.borderRadius = taskRadius
    }

})
