import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        // CREATE
        // data: []
        // DELETE
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    // SEARCH
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList'); // rerendering 값 확인
        // CREATE & DELETE & UPDATE
        const { data, onRemove, onUpdate } = this.props;

        // DELETE & Update
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            )
        );

        // CREATE
        // const list = data.map(
        //     // key값은 배열 랜더링에 꼭 필요한 값이다.
        //     info => (<PhoneInfo key={info.id} info={info}/>)
        // );

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;