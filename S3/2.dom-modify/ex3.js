const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

for(let i=0;i<6;i++) {
    const newP = document.createElement('p');
    newDiv.appendChild(newP);
}

