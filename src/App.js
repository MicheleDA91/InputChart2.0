import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Grafico from "./components/Graphs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      values: [],
      chartType: false
    };
  }
  
  addData = e => {
    e.preventDefault();
    const label = e.target.querySelector('[name="label"]').value;
    const value = e.target.querySelector('[name="value"]').value;
    const { labels, values } = this.state;
    labels.push(label);
    values.push(value);
    this.setState({
      ...this.state,
      values,
      labels,
      title: false
    });
    return false;
  };
  
  setChartType = e => {
    const chartType = e.currentTarget.value;
    this.setState({
      ...this.state,
      chartType
    });
  };
  
  changeTitle = e => {
    e.preventDefault();
    const newTitle = e.target.querySelector('[name="title"]').value;
    this.setState({
      ...this.state,
      title: newTitle
    });
    return false;
  }
  
  render() {
    return (
      <div className="App">
        
        <br/>
        <br/>
        <Form handleSubmit={this.addData} setChartType={this.setChartType} handleChangeTitle={this.changeTitle}/>
        <br/>
        <br/>
        <div className='modal'>
        {this.state.title && <h1>{this.state.title}</h1>}
        <Grafico
          labels={this.state.labels}
          values={this.state.values}
          chartType={this.state.chartType}
        />
        </div>
      </div>
    );
  }
}