// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista.
// Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.length = 0
    }


    add(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.length++;
        } else {
            let currentNode = this.head

            while (currentNode.next !== null && currentNode.value !== value) {
                currentNode = currentNode.next
            }
            if (currentNode.value != value) {
                currentNode.next = node
                this.length++;
            } else {
                console.log('El nodo ya existe')
            }

        }
    }

    remove(valueToRemove) {
        let currentNode = this.head
        let previousNode = null

        if (currentNode.value === valueToRemove) {
            this.head = currentNode.next
        }
        else {
            while (currentNode.value != valueToRemove) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next

        }

        this.length--;
    }
}

const list = new List()

list.add(1)
console.log(list)

list.add(2)
console.log(JSON.stringify(list))

list.add(3)
console.log(JSON.stringify(list))

list.add(4)
console.log(JSON.stringify(list))

list.add(3)
console.log(JSON.stringify(list))

list.remove(3)
console.log(JSON.stringify(list))

list.add(3)
console.log(JSON.stringify(list))
