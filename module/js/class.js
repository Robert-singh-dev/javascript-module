export default class Subscriber {
  constructor(name) {
    this._name = name;
  }
  emailme() {
    return `Hi I am ${this._name}. I emiled to contact@dhuddu@gmail.com`;
  }
}
