import React, {Component} from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';

class DvaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableColumns: [
        { title: "姓名", dataIndex: "name", key: "name" },
        { title: "年龄", dataIndex: "age", key: "age" },
        { title: "爱好", dataIndex: "hobby", key: "hobby" }
      ]
    }
  }

  getUserData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/getUserData',
      payload: {}
    });
  };

  componentDidMount() {
    this.getUserData();
  }

  handleSum = () => {
    const { dispatch } = this.props;
    let _param = 1 + 1;
    dispatch({
      type: 'user/sumNumTwo',
      payload: _param
    });
  }

  render() {
    return (
      <div>
        <span>1 + 1</span>
        <Button onClick={this.handleSum}>=</Button>
        <span>{this.props.user.sumResult}</span>
        <Table
          bordered
          rowKey={"name"}
          columns={this.state.tableColumns}
          dataSource={this.props.user.tableDataSource}>
        </Table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DvaDemo);