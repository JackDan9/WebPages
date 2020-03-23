import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
// 由于antd组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
    state = {
        imageSrc: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    };
    
    handleChange = image => {
        let files = image.target.files;
        for(let i = 0; i < files.length; i++) {
            this.fileToCanvas(files[i], i);
        }
    };

    fileToCanvas = (file, index) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            let image = new Image();
            image.src = event.target.result;
            this.setState({imageSrc: image.src});
            // debugger;
            // image.onload = () => {
            //     // debugger;
            //     // this.setState({imageSrc: image.src});
            //     let canvasEle = document.createElement('canvas');
            //     let imageCanvas = canvasEle.getContext('2d');
            //     // let imageCanvas = this['canvas' + index].getContext('2d');
            //     let canvas = { width: imageCanvas.canvas.scrollWidth * 2, height: imageCanvas.canvas.scrollHeight * 2 };
            //     let radio = image.width / image.height;
            //     let canvasRadio = canvas.width / image.height;
            //     let xStart = 0;
            //     let yStart = 0;
            //     let renderableWidth;
            //     let renderableHeight;

            //     if (radio > canvasRadio) {
            //         // 横向扩展，以高为准，缩放宽度
            //         let hRadio = image.height / canvas.height;
            //         renderableHeight = image.height;
            //         renderableWidth = canvas.width * hRadio;
            //         xStart = (image.width - renderableWidth) / 2;
            //     }

            //     if (radio < canvasRadio) {
            //         // 横向过小，以宽为准，缩放宽度
            //         let wRadio = image.width / canvas.width;
            //         renderableWidth = image.width;
            //         renderableHeight = canvas.height * wRadio;
            //         yStart = (image.height - renderableHeight) / 2;
            //     }

            //     imageCanvas.drawImage(image, xStart, yStart, renderableWidth, renderableHeight, 0, 0, canvas.width * 2, canvas.height);
            // };
        };
    }
    
    render() {
        const { imageSrc } = this.state;
        return(
            <ConfigProvider>
                <img src={imageSrc} alt="上传图片" style={{ width: 200, height: 200 }} />
                <div style={{ width: 400, margin: '100px auto' }}>
                    <input type='file' style={{ width: '50%' }} accept="image/*" multiple capture="camera" onChange={this.handleChange} />
                </div>
            </ConfigProvider>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
