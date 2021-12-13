# React + Antd测试验证项目

## Table - dataSource支持的数据结构

```javascript
const dataSource = [
  {
    key: '1',
    // name: ['单军军', '王凤凤'], // 支持的数据类型
    name: '单军军',
    age: 32,
    address: '西湖区湖底公园1号',
  },
]
```

## Table - dataSource支持的数据结构

```javascript
const dataSource = [
  {
    key: '1',
    // name: [{name: 'jackdan', age: 16}],不支持的数据类型
    age: 32,
    address: '西湖区湖底公园1号',
  },
]
```