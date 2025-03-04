/* <script type="module" src="js/main.js"></script>   */

// use this type = module then only it works

import earnMoney from "./app.js";
import { giveMoney } from "./app.js";
import { growMoney as grow } from "./app.js";

console.log(earnMoney());
console.log(giveMoney());
console.log(grow());

import Subscriber from "./class.js";

const me = new Subscriber("Robert");

console.log(me.emailme());
