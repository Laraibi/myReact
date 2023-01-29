const dataFilePath = "./data.json";
import myReact from "./myReact";
fetch(dataFilePath)
  .then((response) => response.json())
  .then((response) => {
    buildTable(response.personnes);
  });

const buildTable = (data) => {
  let tdListdata = Object.keys(data[0]).map(
    (key) => new myReact("th", {}, [key], 2)
  );

  let tabledata = new myReact(
    "table",
    {},
    [
      new myReact("thead", {}, [new myReact("tr", {}, tdListdata, 4)], 1),
      new myReact(
        "tbody",
        {},
        data.map(
          (persone) =>
            new myReact(
              "tr",
              {},
              Object.keys(persone).map(
                (key) => new myReact("td", {}, [persone[key]], 1)
              ),
              4
            )
        ),
        5
      ),
    ],
    1
  );

  document.body.appendChild(tabledata.render());
};
const helloWord = () => {
  alert("hello word");
};
const btn = new myReact("button", { onclick: helloWord }, ["Search"], 6);
document.body.appendChild(btn.render());
const btn2 = new myReact("button", { onclick: helloWord }, ["button 2"], 6);
document.body.appendChild(btn2.render());
const h1 = new myReact("h1", { onclick: helloWord }, ["title"], 8);
document.body.appendChild(h1.render());


const section = new myReact("section", {}, [new myReact("h4", { style: "color:green" }, ["Hello World"])])
document.body.appendChild(section.render());