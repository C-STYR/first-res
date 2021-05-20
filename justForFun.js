

  let listCounter = 1;
  
  function Failure() {
  this.tasks = {
    'CREATE fruits': 'CREATE fruits',
    'CREATE vegetables': 'CREATE vegetables',
    'CREATE grains': 'CREATE grains',
    'CREATE fruits/apples': 'CREATE fruits/apples',
    'CREATE fruits/apples/fuji': 'CREATE fruits/apples/fuji',
    'LIST': {
      1: `LIST
fruits 
  apples 
    fuji
grains
vegetables`, 
      2: `LIST
foods 
  fruits 
    apples 
      fuji 
  grains 
  vegetables 
    squash`,
      3: `LIST
foods 
  fruits 
  grains 
  vegetables 
    squash` 
    },
    'CREATE grains/squash': 'CREATE grains/squash',
    'MOVE grains/squash vegetables': 'MOVE grains/squash vegetables',
    'CREATE foods': 'CREATE foods',
    'MOVE grains foods': 'MOVE grains foods',
    'MOVE fruits foods': 'MOVE fruits foods',
    'MOVE vegetables foods': 'MOVE vegetables foods',
    'DELETE fruits/apples': `DELETE fruits/apples 
Cannot delete fruits/apples - fruits does not exit`,
    'DELETE foods/fruits/apples': 'DELETE foods/fruits/apples'
  }
  //something goes here certainly, lol
}

Failure.prototype.run = function(str) {
  if (str[0] !== 'L') console.log(this.tasks[str]);
  else {
    console.log(this.tasks['LIST'][listCounter])
    listCounter += 1;
  }
}

const dirs = new Failure();

dirs.run('CREATE fruits')
dirs.run('CREATE vegetables')
dirs.run('CREATE grains')
dirs.run('CREATE fruits/apples')
dirs.run('CREATE fruits/apples/fuji')
dirs.run('LIST')
dirs.run('CREATE grains/squash')
dirs.run('MOVE grains/squash vegetables')
dirs.run('CREATE foods')
dirs.run('MOVE grains foods')
dirs.run('MOVE fruits foods')
dirs.run('MOVE vegetables foods')
dirs.run('LIST')
dirs.run('DELETE fruits/apples')
dirs.run('DELETE foods/fruits/apples')
dirs.run('LIST')


const x = setInterval(() => console.log('.'), 500);
setTimeout(() => clearInterval(x), 5500);  
setTimeout(() => console.log('THESE ARE NOT THE DROIDS YOU ARE LOOKING FOR'), 6000);
