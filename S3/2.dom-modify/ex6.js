const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list = document.createElement('ul');
for(let i=0;i<apps.length;i++) {
    const listEl = document.createElement('li');
    listEl.textContent = apps[i];
    list.appendChild(listEl);
}

document.body.appendChild(list);