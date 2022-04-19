import React, { useState, useEffect, useRef, useMemo, ReactNode } from 'react';
import { Table, Divider, Button, Dropdown, Menu } from 'antd';

function TableDataSource() {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [dataSource, setDataSource] = useState<any>([]);
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
  // 初始接口数据
  const data:any = [];
  for (let i = 1; i < 101; i++) {
    data.push({
      key: i,
      name: 'name' + i,
      age: 'age' + i,
      address: 'address' + i
    })
  }
  // 首行数据
  const firstData = [{
    key: 0, 
    name: 'name0',
    age: 'age0',
    address: 'address0'
  }]; 

  // 首行数据
  const handleData = (sourceData: any, size: number) => {
    // 处理初始数据
    let _data = [];
    for(let i = 0; i < sourceData.length; i = i + (size - 1)) {
      //当判断i + (size - 1)是否小于总数组的长度时，
      //成立了就从（i,size - 1）开始截取保存到_data数组中，其实就是截取数组的前(size - 1)个对象
      if (i + (size - 1) < sourceData.length) {
        _data.push(sourceData.slice(i, i + (size - 1)));
      } else {
        //这里长度不足8的对象也保存在res数组中，截取i的长度
        _data.push(sourceData.slice(i));
      }
    }

    _data.forEach((_dataItem:any) => {
      return _dataItem.length === (size - 1) ? _dataItem.unshift(...firstData) : _dataItem;
    })

    return [].concat.apply([], _data);
  };
  
  useEffect(() => {
    setDataSource(handleData(data, pageSize));
  }, [])

  const handleTableChange = (pagination: any, filters: any) => {
    console.log(pagination);
    console.log(filters);
    setDataSource(handleData(data, pagination && pagination.pageSize));
    setCurrentPageNumber(pagination && pagination.current || 1);
    setPageSize(pagination && pagination.pageSize || 10);
  }

  return (
    <>
      <Table
        dataSource={dataSource}
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
