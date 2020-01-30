function compareName (a,b) {
    const altA = a.name.toUpperCase();
    const altB = b.name.toUpperCase();

    let comp = 0;
    if (altA > altB) {
        comp = 1;
    }
    else if (altA < altB) {
        comp = -1;
    }
    return comp;
}

function getName (arr,id) {
    return arr.find((e) => e.id == id).name;
}
export {compareName, getName};