const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i=0;i<alumns.length;i++) {
    const alumn = alumns[i];
    let approveds = 0;
    if(alumn.T1) approveds++;
    if(alumn.T2) approveds++;
    if(alumn.T3) approveds++;
    
    alumn["isApproved"] = approveds >= 2;
}

console.log(alumns);