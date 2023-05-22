// 1. Работа с простыми типами

const concat = (a: string, b: string) => {
  return a + b;
}
const fullString = concat('Front-', 'end');
console.log(fullString);

//2. Работа с интерфейсами

interface IHomeInterface {
  howIDoIt: string,
  simeArray: Array<number|string>,
  withData: Array<IDataElem>
}

interface IDataElem {
  howIDoIt: string,
  simeArray: Array<number|string>,
}

const MyHometask: IHomeInterface = {

  howIDoIt: "I Do It Wel",

  simeArray: ["string one", "string two", 42],

  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}

//3. Типизация функций, используя Generic

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, array: MyArray<T>) => U, initialValue: U): U;
}

const myArray: MyArray<number> = [1, 2, 3, 4];
myArray.reduce((a, b) => a + b, 0)


//4. Работа с MappedTypes

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
      basis: number;
      value: string;
  }
}

type MyPartial<T> = {
  [P in keyof T]?: T[P] extends object ? MyPartial<T[P]> : T[P];
};

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
      value: 'win'
  }
}
