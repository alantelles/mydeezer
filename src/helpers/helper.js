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

function handledRequire (mod, modNotFound=null) {
    try {
        var res = require(mod);
    }
    catch  {
        if (modNotFound) {
            var res = require(modNotFound)
        }
        else {
            var res = null;
        }
    }
    return res;
}
export {compareName, handledRequire};