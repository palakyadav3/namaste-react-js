const h1=React.createElement(
    "h1",
    {
        id:"heading",
        style:{backgroundColor:"pink"}//properties and attributes
    },
    "Namaste Everyone! How are you.");
    console.log("h1");

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"I am h1 tag."),
        React.createElement("p",{},"I am p tag.Here you can write paragraph."),

    ])

);
const root=ReactDOM.createRoot(document.getElementById("root"));//create Root element
root.render(parent);//append child inside root