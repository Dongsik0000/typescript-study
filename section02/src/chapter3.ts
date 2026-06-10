// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김동식",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 선택적 property, optional property
user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY"
}
// config.apiKey = "CHANGED API KEY"; // error