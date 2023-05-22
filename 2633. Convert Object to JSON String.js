/**
 * @param {any} object
 * @return {string}
 */

function f (str, object) {
    //console.log({object, str});
    if (object === undefined) {
        return;
    }
    if(Array.isArray(object)) {
        str += '[';
        for(item of object) {
            str = f(str, item);
            str += ",";
         }
         if(str[str.length - 1] == ','){
             str = str.substring(0, str.length - 1);
         }
         str += ']';
    }

    else if(object === null) {
        str += null;
    }

    else if(typeof(object) === 'boolean') {
        str += object;
    }

    else if(typeof(object) === 'string') {
        str += '"' + object + '"';
    }

    else if(typeof(object) === 'number') {
        str += object;
    }
    
    else {
        str += "{";
        for(key of Object.keys(object)) {
            //console.log(key);
            //console.log(object[key]);
            //console.log(typeof(object[key]));
            str += '"';
            str += key;
            str += '"';
            str += ":";
            str = f(str, object[key]);
            str += ",";
            }
        
        if(str[str.length - 1] == ',')
            str = str.substring(0, str.length - 1);
        str += "}";
    }
    
    return str;

}
var jsonStringify = function(object) {
    str = "";
    str = f(str, object);
    return str;
};
