
// 实现 n 秒倒计时，初始显示 n (来自props)，每秒递减1，到0时停止倒计时，并显示 “活动开始”
// 使用函数组件 + 自定义 hooks 实现

import React, { useState, useEffect, useRef } from 'react'
import Draggable from 'react-draggable'
import ReactDom from 'react-dom'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import App from './components/App';

function DragModal() {
  const [scale, setScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleDragStart = () => {
    setScale(1);
  };

  const handleDragStop = () => {
    const modal = document.getElementById('modal');
    const { width, height } = modal.getBoundingClientRect();
    const scale = Math.min(window.innerWidth / width, window.innerHeight / height);
    console.log(scale);
    setScale(0.5);
  };

  const showModal = () => {
    console.log("1111");
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>打开弹窗</Button>
      {/* <Draggable
        onStart={handleDragStart}
        onStop={handleDragStop}
        scale={scale}> */}
        <Modal 
          title="测试Modal" 
          width={600}
          height={500}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
            <div id="modal" style={{
              transform: `scale(${scale})`,
              border: '1px solid red'
            }}>
              测试Modal
            </div>
          </Modal>
      {/* </Draggable> */}
    </div>
  )
}

// useRef是一种方法
// function useCountDown(n) {
//   const [time, setTime] = useState(n);
//   const timeRef = useRef(n);
//   // let timeCurrent = n; // 也是可以实现的
//   const intervalId = useRef(0);
  
//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       timeRef.current = timeRef.current - 1;
//       setTime(timeRef.current);
//     }, 1000);
//   }, []);
  
//   if (time === 0) {
//     clearInterval(intervalId.current);
//   }

//   return time;
// }

// function Timer(props) {
//   const time = useCountDown(props.n)

//   return <span>{time === 0 ? '活动开始' : `剩余${time}秒`}</span>
// }

// async function useTimeoutPrint(n) {
//   for (let i = 1; i < n; i++) {
//     console.log(await _promise(i, i * 1000));
//   }
// }

// function* useTimeoutPrint(n) {
//   for (let i = 1; i < n; i++) {
//     yield _promise(i, i * 1000);
//   }
// }

// async function useTimeoutPrint(n) {
//   for (let i = 1; i < n; i++) {
//     console.log("i: ", await _promise(i, i * 1000));
//   }
// }

// function _promise(num, interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num)
//     }, interval);
//   });
// }

// function Print(props) {
//   const _p = useTimeoutPrint(props.n);
//   // _p.then((res) => {
//   //   console.log("res: ", res);
//   // })
//   // Promise.all(_p).then((res) => {
//   //   console.log(res);
//   // });
//   return <span>1111</span>
// }

ReactDom.render(<App />, document.querySelector('#root'))

// function calculateWinner (squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
