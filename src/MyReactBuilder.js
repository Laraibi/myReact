import myReact from "./myReact";

export default class MyReactBuilder {
    constructor(type = null) {
        this.type = type;
        this.props = {};
        this.children = [];
        this.styleID = null;
        this.myTailwindFSPath = "./myTailwind.json";
    }

    setType = (type) => {
        this.type = type;
        return this;
    };
    setProps = (props) => {
        this.props = props;
        return this;
    };
    setChildren = (children) => {
        this.children = children;
        return this;
    };
    setStyleID = (styleID) => {
        this.styleID = styleID;
        return this;
    };
    build = () => {
        return new myReact(
            this.type,
            this.props,
            this.children,
            this.styleID,
            this.myTailwindFSPath,
        );
    };
}
