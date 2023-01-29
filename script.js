fetch("data.json")
  .then((response) => response.json())
  .then((response) => {
    buildTable(response.personnes);
  });

const buildTable = (data) => {
  let tdListdata = Object.keys(data[0]).map(
    (key) =>
      new myReact(
        "th",
        { },
        [key],1
      )
  );

  let tabledata = new myReact("table", {  }, [
    new myReact("thead", {}, [
      new myReact("tr", {  }, tdListdata,1),
    ],1),
    new myReact(
      "tbody",
      {},
      data.map(
        (persone) =>
          new myReact(
            "tr",
            {},
            Object.keys(persone).map(
              (key) =>
                new myReact("td", { }, [persone[key]],1)
            ),1
          )
      ),1
    ),
  ]);

  document.body.appendChild(tabledata.render());
};
const helloWord = ()=>{
  alert("hello word")
}
const btn= new myReact('button',{onclick:helloWord},['Search'],2)
document.body.appendChild(btn.render())
