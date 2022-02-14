import React, { useState, useRef, useMemo, ReactNode } from 'react';
import { Table, Divider, Button, Dropdown, Menu } from 'antd';

function TableDataSource() {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a href="/">{text}</a>,
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
    render: (text: any, record: any) => (
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

  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      key: i,
      name: 'name' + i,
      age: 'age' + i,
      address: 'address' + i
    })
  }

  const handleTableChange = (pagination: any, filters: any) => {
    console.log(pagination);
    console.log(filters);
    setCurrentPageNumber(pagination && pagination.current || 1);
    setPageSize(pagination && pagination.pageSize || 10)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Button onFocus={(e) => { console.log(1) }}>
        <Dropdown overlay={<Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
        </Menu>}>
          <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me
          </div>
        </Dropdown>
      </Button>
      <Table
        dataSource={data}
        columns={columns}
        bordered={true}
        onChange={(pagination, filters) => handleTableChange(pagination, filters)}
        pagination={{
          position: ['bottomRight'],
          total: data && data.length,
          showSizeChanger: true,
          current: currentPageNumber,
          pageSize: pageSize,
        }} />
    </>
  );
};

export default TableDataSource;
