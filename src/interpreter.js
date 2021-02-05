import React from "react";

class Interpreter extends React.Component {
  constructor(visitor) {
    super();
    this.visitor = visitor;
  }
  interpret(nodes) {
    return this.visitor.run(nodes);
  }
  getValue() {
    return this.visitor.value;
  }
}
export default Interpreter;
