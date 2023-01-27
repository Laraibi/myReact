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
            if (typeof child === 'string') {
                element.innerHTML += child;
            } else {
                element.appendChild(child.render());
            }
        }

        return element;
    }
}



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

document.body.appendChild(header.render());