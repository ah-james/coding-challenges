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
        let address = this.hash(key)
        if (!this.data[address]) { // check to see if something already exists in current memory space
            this.data[address] = [] // if it doesn't create an empty array, this prevents data from being overwritten if something new is added to same memory space
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        // return this.data[this._hash(key)] can't do this in case multiple things saved in this location in memory, also just want value, no key
        let address = this._hash(key)
        let currentSpace = this.data[address] // check if something exists at current location in memory
        if (currentSpace) {
            for (let i = 0; i < currentSpace.length; i++) { // loop through array in memory
                if (currentSpace[i][0] === key) { // if the key is the same as the key saved in memory, return the value seen there
                    return currentSpace[i][1]
                }
            }
        }
        return undefined
    }
}