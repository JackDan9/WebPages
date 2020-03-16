'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor() {
        // super关键字，它在这里表示父类的构造函数，用来新建父类的this对象
        super();
        console.log(Object.getPrototypeOf(LikeButton) === React.Component)
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        // return e(
        //     'button',
        //     { onClick: () => this.setState({ liked: true }) },
        //     'Like',
        // );

        // 显示一个Like button
        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
