function Node(val) {
  this.value = val;
  this.next = null;
}
function structure() {
  this.directory = {};

  // function LinkedList() {
  //   this.head = null;
  //   this.tail = null;
  // }


  // LinkedList.prototype.push = function(value) {
  //   let newNode = new Node(value);
  //   if (this.head === null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //   } 
  //   else {
  //     this.tail.next = newNode;
  //     this.tail = newNode;
  //   }
  // };
  
}



structure.prototype.run = function(taskString) {
  
  //split taskString into action and object
  const inputCommand = taskString.split(' ');
  let task = inputCommand[0]
  let path = inputCommand[1].split('/')
  let subject = path[path.length - 1]



  //switch/case logic based on task
  switch(task){
      case('CREATE'):
        let head = path[0];
        if (path.length === 1) {
          this.directory[head] = new Node(head);

        } else {
        let currNode = this.directory[head];
       // console.log('currNode',currNode);
        let tempPointer;
          while(currNode){
            if (currNode.next === null) tempPointer = currNode;
            currNode = currNode.next;
            console.log(currNode)
          
          // currNode = nextNode;
          // nextNode = nextNode.next
          }
         // console.log('tempPointer', tempPointer)
          tempPointer.next = new Node(subject)
          // console.log('currNode', currNode)
          console.log(this.directory)

        }
          

      break;
      // case(task === 'DELETE'):
      //     //do something 
      // break;
      // case(task === 'LIST'):
      //     //do something 
      // break;
      // case(task === 'MOVE'):
      //     //do something 
      // break;
      
  }
  
}
const dirs = new structure();

dirs.run('CREATE fruits')
dirs.run('CREATE fruits/apples')