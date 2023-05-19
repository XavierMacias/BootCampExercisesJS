const input$$ = document.body.querySelector('input');
const button$$ = document.body.querySelector('.btn-add');
const tasksList$$ = document.body.querySelector('ul');
const completeText$$ = document.body.querySelector('.empty');
button$$.setAttribute('type','button');

function clickDelete(event) {
    event.target.parentElement.remove();
    if(tasksList$$.children.length == 0) {
        completeText$$.style.display = "block";
    }
}

function clickButton() {
    let value = input$$.value;
    if(value.replace(/\s/g, '') != "") {
        const li$$ = document.createElement('li');

        const deleteBtn$$ = document.createElement('button');
        deleteBtn$$.setAttribute('class','btn-delete');
        deleteBtn$$.textContent = "X";

        const task$$ = document.createElement('p');
        task$$.textContent = value;

        li$$.appendChild(task$$);
        li$$.appendChild(deleteBtn$$);
        tasksList$$.appendChild(li$$);
        completeText$$.style.display = "none";
        deleteBtn$$.addEventListener('click',clickDelete);
    }
    input$$.value = "";
}

button$$.addEventListener('click',clickButton);