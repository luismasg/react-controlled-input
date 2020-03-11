import React, { Component } from "react";
import "./class.scss";

export default class ClassComponent extends Component {
  state = {
    formfields: { name: "", country: "", faction: "2", needsVisa: false },
    isSubmitting: false
  };

  handleInputChange = e => {
    const { name, value, checked, type } = e.target;
    console.group("event:");
    console.log("name: ", name);
    console.log("checked: ", checked);
    console.log("value: ", value);
    console.log("type: ", type);
    // console.table(e.target);
    console.groupEnd();

    this.setState(prevState => ({
      formfields: {
        ...prevState.formfields,
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };
  handleSubmit = () => {
    const { name, country, faction } = this.state.formfields;
    if (name && country && faction) {
      this.setState({ isSubmitting: true });
      setTimeout(() => {
        this.setState({ isSubmitting: false }); // set submitting flag for submit button
        alert(
          "(class Component): Application submitted to backend check console for details"
        );
        console.log(
          "(class Component): data sent to backend: ",
          this.state.formfields
        );
        // this is what we want to send
        // this is how we would do that
        // fetch("https://myAwesomeAPI/register", {
        //   method: "post",
        //   body: JSON.stringify(this.state.formfields)
        // }).then(response => {console.log(response)});
      }, 2000);
    } else {
      alert("error: Name and country are required");
    }
  };

  render() {
    return (
      <div className="class">
        <h1>Class Component Example </h1>
        <label>
          Name:
          <input
            name="name"
            placeholder="aqui va tu nombre"
            value={this.state.formfields.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          country:
          <input
            name="country"
            placeholder="aqui va tu pais"
            value={this.state.formfields.country}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Autobots
          <input
            type="radio"
            name="faction"
            value="1"
            checked={this.state.formfields.faction === "1"}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Decepticons
          <input
            type="radio"
            name="faction"
            value="2"
            checked={this.state.formfields.faction === "2"}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          needs Visa
          <input
            type="checkbox"
            name="needsVisa"
            checked={this.state.formfields.needsVisa}
            onChange={this.handleInputChange}
          />
        </label>

        <button onClick={this.handleSubmit} disabled={this.state.isSubmitting}>
          {this.state.isSubmitting ? "Submitting data . . ." : "Submit"}
        </button>
      </div>
    );
  }
}
