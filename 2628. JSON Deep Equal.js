/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */

function checkObject(o1, o2) {
    if(o1 == undefined && o2 == undefined){
        return true;
    }

    if(o1 == null && o2 == null){
        return true;
    }
    else if(o1 == null || o2 == null){
        return false;
    }

    if(typeof(o1) === 'object' && typeof(o2) === 'object'){

    console.log({o1, o2});
    if(Object.keys(o1).length != Object.keys(o2).length) {
        return false;
    }

    

    if(Object.keys(o1).length == 0 && Object.keys(o2).length == 0) {
        console.log(typeof(o1));
        if(typeof(o1) === 'object' && typeof(o2) === 'object'){
            return true;
        }
        if(o1 != o2) {
            return false;
        }
        return true;
    }
    if(Array.isArray(o1)){
        if(!Array.isArray(o2)) {
            return false;
        }
    }

    if(Array.isArray(o2)){
        if(!Array.isArray(o1)){
            return false;
        }
    }
    
    for (key in o1) {
       if(!Object.keys(o2).includes(key)) {
           return false;
       }        
        if(!checkObject(o1[key], o2[key])) {
            return false;
        } 
    }

    
    return true;
    }
    else if (o1 !== o2){
        return false;
    }
    else {
        return true;
    }
}
var areDeeplyEqual = function(o1, o2) {
    if(typeof(o1) === 'object' && typeof(o2) === 'object'){
        if(!checkObject(o1, o2)){
            return false;
        }
    }

    else if (o1 !== o2){
            return false;
        }
    return true;
    
    

};
