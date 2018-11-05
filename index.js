let BoardMember = function(name, homeState,
training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.releasePressStatement = ()=>{
    return "You will see great things from Scuber."
  }
     this.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${training}.`
 }

  BoardMember.prototype.veto = ()=>{
    return `No, I must disagree`
  };

  BoardMember.prototype.approve = ()=>{
   return `You can do that!`
  };

  BoardMember.prototype.doCharity = ()=>{
  return `I like to help people.`
 }


//
// In `index.js`, write a constructor function called `BoardMember`
// that sets the following properties: `name`, `homeState`,
// and `training`.
//
// Add following methods to the class:
// + `veto` — returns `No, I must disagree`
//
// + `approve` — returns `You can do that!`
//
// + `doCharity` — returns `I like to help people.`
//
// + `releasePressStatement` — returns `You will see great things from Scuber.`
//
// + `sayHi` — returns `"Hi, my name is <name>.
//  I am from <homestate>, and I was trained in <training>.`
