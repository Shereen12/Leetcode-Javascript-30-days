var TimeLimitedCache = function() {
    this.arr = Array();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    for(let i = 0 ; i < this.arr.length; i++){
        if(this.arr[i].id == key){
            this.arr[i].value = value;
            this.arr[i].duration = duration;
            clearTimeout(this.arr[i].intervalId);
            let returnValue = true;
            if(this.arr[i].state == 'expired') {
                returnValue = false;
            }
            this.arr[i].state = 'active';
            setTimeout(() => this.arr[i].state = 'expired', duration);
            return returnValue;
        }
    }

    let element = {
        id: key,
        value: value,
        duration: duration,
        state: 'active',
    };
    let length = this.arr.push(element);
    let intervalId = setTimeout(() => this.arr[length - 1].state = 'expired', duration);  
    this.arr[length - 1].intervalId = intervalId;
    return false;     
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    for(let i = 0 ; i < this.arr.length ; i++){
        if(this.arr[i].id == key && this.arr[i].state =='active'){
            return this.arr[i].value;
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for(let i = 0 ; i < this.arr.length ;i++){
        if(this.arr[i].state == 'active'){
            count++;
        }
    }
    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
