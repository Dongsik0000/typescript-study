/**
 * 타입 추론
 */

let a = 10;
let b = "heelo";
let c = {
  id: 1,
  name: "김동식",
  profile: {
    nicknmae: "belita",
  },
  urls: ["https://naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.tofixed;  // error

const num = 10;
const str = "hello";

let arr = [1, "string"];
