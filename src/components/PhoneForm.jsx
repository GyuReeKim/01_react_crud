import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // 페이지의 reloading을 방지한다.
    this.props.onCreate(this.state); // state값을 onCreate를 통해 부모에게 전달한다.
    // 상태를 초기화한다.
    this.setState({
      name: '',
      phone: ''
    })
  }
  
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange} // input값이 바뀔때마다 event 발생
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        {/* <div>{this.state.name} {this.state.phone}</div> */}
        <button onClick={this.handleSubmit} type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;