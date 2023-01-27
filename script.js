class myReact {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }

    render() {
        const element = document.createElement(this.type);

        for (const prop in this.props) {
            element[prop] = this.props[prop];
        }

        for (const child of this.children) {
            if (!(child instanceof myReact)) {
                element.innerHTML += child;
            } else {
                element.appendChild(child.render());
            }
        }

        return element;
    }
}

data = [
    { name: "yassine", age: 28, sexe: "M" },
    { name: "youssef", age: 30, sexe: "M" },
    { name: "Fatima", age: 25, sexe: "F" },
]



const listItems = [
    new myReact('li', {}, ['youssef']),
    new myReact('li', {}, ['Mehdi']),
    new myReact('li', {}, ['Yassine']),
]
const header = new myReact('header', { className: 'header' }, [
    new myReact('h1', {}, ['Hello World']),
    new myReact('img', {}, ['This is a JSX Replacement']),

    new myReact('ul', {}, listItems),
]);


const table = new myReact('table', {}, [
    new myReact('thead', {}, [
        new myReact("tr", {}, Object.keys(data[0]).map((th) => new myReact('td', {}, [th])))
    ]),
    new myReact('tbody', {},
        data.map((person) => new myReact("tr", {},
            Object.keys(person).map((key) => new myReact('td', {}, [person[key]])))))
])

console.log(table)
document.body.appendChild(header.render());
document.body.appendChild(table.render());


