// 2.- Escribir un programa para formar una lista que realicen las siguientes tareas:
// a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por
// el último nodo.
// b) Recorrer la Lista para mostrar los Elementos por pantalla.
// c) Mostrar todos los Nodos que superen un valor determinado. 

class Node {
    constructor(value){
        this.value=value
        this.next=null 
    }
}

class List {
    constructor(){
        this.head=null
        this.length=0
    }
    add(value){
        let node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            let currentNode=this.head
            while(currentNode.next!=null){
                currentNode=currentNode.next
            }
            currentNode.next=node
        }
        this.length++;
    }

    remove(valueToRemove){
        let currentNode=this.head
        let previousNode=null 
        if(currentNode.value== valueToRemove){
            this.head = currentNode.next
        }else{
            while(currentNode.value != valueToRemove){
                previousNode=currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        this.length--;
    }
    
    show(value){
        const showList=[]
        let currentNode = this.head
        for(var i=0; i<this.length;i++){
            if(currentNode.value>value){
                showList.push(currentNode.value)
                currentNode = currentNode.next
            }else{
                currentNode = currentNode.next
            }
        }

        console.log(showList)
    }
}

const list= new List()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)

console.log(JSON.stringify(list))

list.show(3)



