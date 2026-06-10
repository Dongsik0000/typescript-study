// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birthday: string;
  bio: string;
  location: string;
};

// function func() {
//     type User = {};
// }

let user: User = {
  id: 1,
  name: "김동식",
  nickname: "동식이",
  birthday: "1990-01-01",
  bio: "안녕하세요. 저는 김동식입니다.",
  location: "서울시 강남구",
};

let user2: User = {
  id: 1,
  name: "김동식",
  nickname: "동식이",
  birthday: "1990-01-01",
  bio: "안녕하세요. 저는 김동식입니다.",
  location: "서울시 강남구",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Koerea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
//   Korea: string; // error
};

let countryNumberCodes = {
  Korea: "ko",
  UnitedState: 840,
  UnitedKingdom: 826,
};
