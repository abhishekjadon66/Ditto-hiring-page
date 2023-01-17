import React, {useState} from "react";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { flushSync } from "react-dom";


export const CustomDropdown = (props) => (
    <div className="form-group">
    <strong>{props.username}</strong>
    <select
      className="text-center bg-body text-dark p-1 rounded"
      style={{ width: "15em", border: "1px solid #e6e6e6", height: '40px' }}
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select{props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.username}
        </option>
      ))}
    </select>
  </div>
);
export default class CustomListDropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: [],
      value: "",
    };
  }
  componentDidMount() {
    fetch("")
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }));
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <>
        <div className={styles.con}>
          <div className={styles.container}>
            <h3 className={styles.drop}>Open Positions</h3>

            <div
              className="d-flex text-center flex-wrap gap-2 position-relative"
              style={{
                margin: "0 10px 10px 0",
              }}
            >
              <CustomDropdown
                name={this.state.username}
                options={this.state.collection}
                onChange={this.onChange}
              />

              <CustomDropdown
                name={this.state.username}
                options={this.state.collection}
                onChange={this.onChange}
              />

              <CustomDropdown
                name={this.state.username}
                options={this.state.collection}
                onChange={this.onChange}
              />
            </div>

            <div className="position-relative">
              <input
                style={{
                  padding: "10px 30px",
                  height: "40px",
                  marginBottom: "10px",
                  fontSize: "15px",
                }}
                className="border border-1 w-100 rounded bg-white text-dark"
                type="search"
                placeholder="Search Job Title"
                aria-label="Search"
              />
              <i
                className="pi pi-search position-absolute"
                style={{
                  top: "14px",
                  left: "10px",
                  color: " #79888E",
                  fontSize: "14px",
                }}
              ></i>
              <Button
                icon="pi pi-times"
                id="cancel"
                className="bg-transparent text-black rounded-circle border border-white position-absolute"
                aria-label="Cancel"
                style={{
                  right: "10px",
                  top: "8px",
                  fontSize: "12px",
                  cursor: "pointer",
                  display: "none",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
