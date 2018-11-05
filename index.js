function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  BoardMember.prototype.veto = function veto() {
    return 'No, I must disagree'
  }

  BoardMember.prototype.approve = function approve() {
    return 'You can do that!'
  }

  BoardMember.prototype.doCharity = function doCharity() {
    return 'I like to help people.'
  }

  BoardMember.prototype.releasePressStatement = function releasePressStatement() {
    return 'You will see great things from Scuber.'
  }

  BoardMember.prototype.sayHi = function sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
