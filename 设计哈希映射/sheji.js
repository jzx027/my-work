var MyHashMap = function() {
    this.base = 1000;
    this.data = new Array(this.base).fill(0).map(i => new Array());
};

MyHashMap.prototype.put = function(key, value) {
    let hash = key % this.base;
    for(let i of this.data[hash]){
        if(i[0] === key) return i[1] = value;
    }
    this.data[hash].push([key, value]);
};

MyHashMap.prototype.get = function(key) {
    let hash = key % this.base;
    for(let i of this.data[hash]){
        if(i[0] === key) return i[1];
    }
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let hash = key % this.base;
    for(let i of this.data[hash]){
        if(i[0] === key) {
            let index = this.data[hash].indexOf(i);
            this.data[hash].splice(index, 1);
        }
    }
};