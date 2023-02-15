// take given hash table and implement .set and .get methods

class HashTable {
    constructor(size) {
        this.data = new Array(size) 
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    set(key, value) {
        this.data[this._hash(key)] = [key, value]
    }

    get(key) {
        console.log(this.data[this._hash(key)])
        return this.data[this._hash(key)]
    }
}