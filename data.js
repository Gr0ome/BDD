const data = [
  { n: "Фгыг Жуспсе", a: "2000-05-29" },
];

let myStorage = window.localStorage;

myStorage.setItem("data", JSON.stringify(data));
