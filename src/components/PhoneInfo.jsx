import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    // UPDATE
    state = {
        editing: false, // 수정버튼을 누르면 true로 설정되며 input 형태로 보여준다.
        name: '',
        phone: '',
    }

    // DELETE
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // UPDATE
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing }); // editing 값을 반전시켜준다.
    }

    // UPDATE
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    // UPDATE
    componentDidUpdate(prevProps, prevState) { // 수정을 누르면 기존 값이 input에 나타나게 한다.
        const { info, onUpdate } = this.props;

        if (!prevState.editing && this.state.editing) { // editing이 true로 전환되면
            this.setState({ // info 값을 state에 넣어준다.
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) { // editing이 false로 전환되면
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }


    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        
        // 수정을 하는 경우
        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>    
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>    
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>

            )
        }

        // 그 외의 경우
        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                {/* UPDATE */}
                <button onClick={this.handleToggleEdit}>수정</button>
                {/* DELETE */}
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;