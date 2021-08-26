// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

console.log("Hello")
// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
   id: number | string
  name: string
  age?: number
}
const u : UserInterface={
  id:'hh',
  name:'g',
}
console.log(u.id)

const user1: UserInterface = {
  id: 1,
  name: 'John',
}


interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string
  roll: number

  constructor(id: number, name: string, roll:number) {
    this.id = id
    this.name = name
    this.roll=roll
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy',4)
const mike = new Person(2, 'Mike Jordan',5)

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, roll:number, position: string) {
    super(id, name,roll)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 4,'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

