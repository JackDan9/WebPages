import React, { useState, useEffect, useRef } from 'react'
import Draggable from 'react-draggable'
import ReactDom from 'react-dom'
import { Modal, Button, Cascader } from 'antd';

// const App = () => {
//     // const [count, setCount] = useState(0);
//     // function DragModal() {
//         const [scale, setScale] = useState(1);
//         const [isModalOpen, setIsModalOpen] = useState(true);

//         const handleDragStart = () => {
//             setScale(1);
//         };

//         const handleDragStop = () => {
//             const modal = document.getElementById('modal');
//             const { width, height } = modal.getBoundingClientRect();
//             const scale = Math.min(window.innerWidth / width, window.innerHeight / height);
//             console.log(scale);
//             setScale(0.5);
//         };

//         const showModal = () => {
//             console.log("1111");
//             setIsModalOpen(true);
//         }

//         const handleOk = () => {
//             setIsModalOpen(false);
//         }

//         const handleCancel = () => {
//             setIsModalOpen(false);
//         }

//         return (
//             <div>
//                 <Button type="primary" onClick={showModal}>打开弹窗</Button>
//                 {/* <Draggable
//         onStart={handleDragStart}
//         onStop={handleDragStop}
//         scale={scale}> */}
//                 <Modal
//                     title="测试Modal"
//                     width={600}
//                     height={500}
//                     open={isModalOpen}
//                     onOk={handleOk}
//                     onCancel={handleCancel}>
//                     <div id="modal" style={{
//                         transform: `scale(${scale})`,
//                         border: '1px solid red'
//                     }}>
//                         测试Modal
//                     </div>
//                 </Modal>
//                 {/* </Draggable> */}
//             </div>
//         )
//     // }

//     // const log = () => {
//     //     setTimeout(() => {
//     //         console.log(`count刚开始是0, 之后的conut是`, count);
//     //     }, 3000);
//     // };

//     // return (
//     //     <div>
//     //         <p>{count}</p>
//     //         <button onClick={() => {
//     //             log();
//     //             setCount(3);
//     //         }}>Click Me</button>
//     //     </div>
//     // )
// }

function renderCascaderLabel(option) {
    return (
        <span>
            <img src={option.icon} alt={option.label} width="20" height="20" />
            {option.label}
        </span>
    );
}

function App() {
    const options = [
        {
            value: '1',
            label: renderCascaderLabel({
                value: '2',
                label: 'Option 2',
                icon: 'https://via.placeholder.com/20x20.png?text=2'
            }),
            icon: 'https://via.placeholder.com/20x20.png?text=1'
        },
        {
            value: '2',
            label: 'Option 2',
            icon: 'https://via.placeholder.com/20x20.png?text=2'
        },
        {
            value: '3',
            label: 'Option 3',
            icon: 'https://via.placeholder.com/20x20.png?text=3'
        }
    ];

    return <Cascader 
        options={options} />;
}


export default App;