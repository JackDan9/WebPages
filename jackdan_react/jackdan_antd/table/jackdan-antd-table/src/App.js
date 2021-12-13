// import logo from './logo.svg';
import './App.css';
import { Table } from 'antd';
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

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  // const [dataSource, setDataSource] = useState([
  const dataSource = [
    {
      key: '1',
      // name: ['单军军', '王凤凤'], // 支持的数据类型
      name: '单军军',
      // name: [{name: 'jackdan', age: 16}],不支持的数据类型
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  useEffect(() => {
    return () => {
      console.log("app unmounted");
    }
  }, []);

  return (
    <div className="App">
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
      <Table dataSource={dataSource} bordered={true} columns={columns} pagination={false} />
    </div>
  );
}

export default App;
