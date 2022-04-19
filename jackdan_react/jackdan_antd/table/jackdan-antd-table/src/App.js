// import logo from './logo.svg';
import styles from './App.css';
import { useEffect } from 'react';
import * as moment from 'moment';
import SearchSelectDemo from './components/SearchSelect';
import TableDataSource from './components/TableDataSource';
import ModalSuccess from './components/ModalSuccess';

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

  useEffect(() => {
    // debugger;
    return () => {
      console.log("app unmounted");
    }
  }, []);

  // const _testObjectArray = ReactHTML()

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
      
      {/* <Table dataSource={data} columns={columns} bordered={true} pagination={false} />
      <DatePicker.RangePicker 
        open 
        showTime
        defaultPickerValue={[moment("2019-12-09"), moment("2020-12-29")]}
      /> */}
      {/* <SearchSelectDemo /> */}
      <TableDataSource />
      {/* <ModalSuccess /> */}
    </div>
  );
}

export default App;
