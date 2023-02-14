const dataFilePath = "./data.json";
import myReact from "./myReact";
import MyReactBuilder from "./MyReactBuilder";
fetch(dataFilePath)
    .then((response) => response.json())
    .then((response) => {
        let localData = response.personnes;

        // let inputSearch = new myReact(
        //     "input",
        //     {
        //         type: "text",
        //         placeholder: "search",
        //         onkeyup: (e) =>
        //             buildTable(searchData(e.target.value, localData)),
        //     },
        //     [],
        //     9,
        // ).render();

        ////////////////////////////////////////

        let inputSearch = new MyReactBuilder("input")
            .setProps({
                // add props
                type: "text",
                placeholder: "search",
                onkeyup: (e) =>
                    buildTable(searchData(e.target.value, localData)),
            })
            .setChildren([]) // add children
            .setStyleID(9) // add styleId
            .build() // return the myReact instance
            .render(); // execute render method

        document.body.appendChild(inputSearch);
        buildTable(localData);
        // nextWork();
    });
const searchData = (query, data) =>
    data.filter((element) =>
        Object.values(element).some((value) =>
            value.toString().includes(query),
        ),
    );
const sortData = (field, data, desc = false) =>
    buildTable(
        data.sort((a, b) =>
            desc
                ? a[field] > b[field]
                    ? 1
                    : -1
                : b[field] > a[field]
                ? 1
                : -1,
        ),
    );
const buildTable = (data) => {
    // let formSearch = new myReact("form", {}, )

    const exist = document.querySelector("table");
    exist && exist.remove();
    let tdListdata = Object.keys(data[0]).map(
        (key) =>
            new myReact(
                "th",
                {},
                [
                    key,
                    new myReact(
                        "button",
                        { onclick: () => sortData(key, data, true) },
                        ["^"],
                        6,
                    ),
                    new myReact(
                        "button",
                        { onclick: () => sortData(key, data) },
                        ["v"],
                        6,
                    ),
                ],
                2,
            ),
    );

    let tabledata = new myReact(
        "table",
        {},
        [
            new myReact("thead", {}, [new myReact("tr", {}, tdListdata, 4)], 3),
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
                                    new myReact("td", {}, [persone[key]], 5),
                            ),
                            4,
                        ),
                ),
                10,
            ),
        ],
        1,
    );

    document.body.appendChild(tabledata.render());
};

function nextWork() {
    const helloWord = () => {
        alert("hello word");
    };
    const btn = new myReact("button", { onclick: helloWord }, ["Search"], 6);
    document.body.appendChild(btn.render());
    const btn2 = new myReact("button", { onclick: helloWord }, ["button 2"], 6);
    document.body.appendChild(btn2.render());
    const h1 = new myReact("h1", { onclick: helloWord }, ["title"], 8);
    document.body.appendChild(h1.render());

    const section = new myReact("section", {}, [
        new myReact("h4", { style: "color:green" }, ["Hello World"]),
    ]);
    document.body.appendChild(section.render());

    const ul = new myReact("ul", {}, [new myReact("li", {}, ["item1"])], 8);
    document.body.appendChild(ul.render());
}
