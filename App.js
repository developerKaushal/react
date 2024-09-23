/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *       <h1>I am H! tag</h1>
 *      </div>
 *       <div id="child2">
 *       <h1>I am H2tag</h1>
 *      </div>
 * </div>
 *  
 * ReactElement(Onject) = HTML(Browser Understand)
 * 
 */

const parent = React.createElement(
  "div",
  {id:"parent"},
  [React.createElement("div",{id:"child1"},[
    React.createElement("h1", {},"I am H1 tag"),
    React.createElement("h2", {},"I am H2 tag")]
    ),
    React.createElement("div",{id:"child2"},[
      React.createElement("h1", {},"I am H1 tag"),
      React.createElement("h2", {},"I am H2 tag")]
      )])

console.log(parent) // Its just an object its a React element not any tag.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Render method is responsible for to take the object(heading) converted into HTML and put it into DOM.
