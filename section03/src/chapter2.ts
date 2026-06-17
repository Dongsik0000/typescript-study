/**
 * Unknown 타입
 */

// unknown 타입은 모든 타입의 슈퍼 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = [];
  let g: unknown = {};
  let h: unknown = () => {};
}
let unknownVar: unknown;
// let num: number = unknownVar; // error

/**
 * Never 타입
 */

// 모든 타입의 서브 타입(공집합) 
// function neverExam() {
//   let a: number = neverVar; // error
//   let b: string = neverVar; // error
//   let c: boolean = neverVar; // error
//   let d: null = neverVar; // error
//   let e: undefined = neverVar; // error
//   let f: [] = neverVar; // error
//   let g: {} = neverVar; // error
// }

let neverVar: never;

function errorFunc(): never {
  throw new Error();
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */

// 모든 타입의 슈퍼 타입이자 서브 타입의 역할을 한다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;  // error
}
