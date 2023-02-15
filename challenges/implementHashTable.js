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
        let address = this._hash(key)
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

    keys() {
        // loop through each location in space, push keys into array
        const returnedArray = []

        for(let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        returnedArray.push(this.data[i][j][0])
                    }
                } else {
                    returnedArray.push(this.data[i][0][0])
                }
            }
        }
        console.log(returnedArray)
        return returnedArray
    }

}

const hash = new HashTable(10)
hash.set('grapes', 10)
hash.set('oranges', 200)
hash.set('apples', 3000)
hash.set('bananas', 40000)
hash.keys()