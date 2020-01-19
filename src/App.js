import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {
  id = 2

  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    // SEARCH
    keyword: ''
  }

  // CREATE
  handleCreate = (data) => {
    // console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  // DELETE
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  // UPDATE
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data }
          : info
      )
    })
  }

  // SEARCH
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  
  render() {
    // CREATE & & DELETE & UPDATE & SEARCH
    const { information, keyword } = this.state;

    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {/* SEARCH */}
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        {/* CREATE */}
        {/* {JSON.stringify(information)} */}
        {/* <PhoneInfoList data={this.state.information} /> */}
        {/* DELETE & UPDATE */}
        <PhoneInfoList
          // data={information}
          data={filteredList} //SEARCH
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
