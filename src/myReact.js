class myReact {
  constructor(type, props, children, styleID = null) {
    this.type = type;
    this.props = props;
    this.children = children;
    this.styleID = styleID;
  }

  render() {
    const element = document.createElement(this.type);

    for (const prop in this.props) {
      element[prop] = this.props[prop];
    }

    if (this.styleID) {
      fetch("myTailwind.json")
        .then((response) => response.json())
        .then((response) => {
          const theStyle = response.allStyles.find(
            (style) => style.id == parseInt(this.styleID)
          );
          theStyle && (element.className += theStyle.class);
        });
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
