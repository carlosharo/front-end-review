function HasTable(size) {
    this.table = new Array(size);
    this.size = size;
    this.hash = hash;
    this.set = set;
    this.get = get;
    this.remove = remove;
    this.print = print;

    // it help us to create the has key value
    function hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size; // to make sure is between the array range values.
    }

    function set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    function get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    function remove(key) {
        const index = this.hash(key);
        if (this.get(key)) { 
            this.table[index] = undefined;
        }else{
            console.log(`Value not found, key:${key} doesn't exist`);
        }
    }

    function print() {
        const values = [];
        for (let x = 0; x < this.size; x++) {
            const value = this.table[x]
            if(value) values.push(value);
        }
        return values;
    }
}

const hashTable = new HasTable(50);
hashTable.set('key', 'This is my secret message'); // Add key, value
console.log('Get: ', hashTable.get('key')); // Get:  This is my secret message
hashTable.set('temp', 'temp value'); // Add new key, value 
console.log('Table: ', hashTable.print()); // Table:  [ 'This is my secret message', 'temp value' ]
hashTable.remove('remove'); // Value not found, key:remove doesn't exist
hashTable.remove('temp');
console.log('Table: ',hashTable.print()); // Table:  [ 'This is my secret message' ]