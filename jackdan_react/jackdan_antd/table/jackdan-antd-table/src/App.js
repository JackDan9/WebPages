// import logo from './logo.svg';
import styles from './App.css';
import { Table, Divider } from 'antd';
import { useEffect } from 'react';

function App() {
  // const [columns, setColumns] = useState([
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  // ]);

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="/">{text}</a>,
  }, {
    title: '张三',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '李四',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="/">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="/">Delete</a>
        <Divider type="vertical" />
        <a href="/" className="ant-dropdown-link">
          More actions
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'age',
    age: 32,
    address: '32',
  }, {
    key: '2',
    name: 'address',
    age: 'London No. 1 Lake Park',
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'action',
    age: 'Sidney No. 1 Lake Park',
    address: 'Sidney No. 1 Lake Park',
  }];

  useEffect(() => {
    // debugger;
    return () => {
      console.log("app unmounted");
    }
  }, []);

  return (
    <div className={styles.App}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* {1111} */}
      {/* [{"name": 1}] */}
      <Table dataSource={data} columns={columns} bordered={true} pagination={false} />
    </div>
  );
}

export default App;
