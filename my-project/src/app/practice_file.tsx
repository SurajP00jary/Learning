function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());


  greet("Maddison", Date());

  // Date() will return string so we need to convert it to date becz the type of second arg is Date
//   soln :
greet("Maddison",new Date())
// new Date() will retutn Date type.

function greeting(person:string, date:Date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

// conncatinating string with other types

// object type can be declared as interface also

interface Point {
    x: number;
    y: number;
  }
   
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


  //interface v/s type

  //we can add extra fields to an interface which cannot be done in type 

  //interface
  interface Window {
    title: string;
  }
  
  interface Window {
    ts: TypeScriptAPI;
  }


  // type
  const src = 'const a = "Hello World"';
  window.ts.transpileModule(src, {});

  type Window = {
    title: string;
  }
  
  type Window = {
    ts: TypeScriptAPI;
  }
  
   // Error: Duplicate identifier 'Window'.
  