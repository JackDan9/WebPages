import React from 'react';

// 导出context对象
// export const globalContext = React.createContext(默认数据)
export const globalContext = React.createContext(globalData);

// 导出context 仓库
export const globalData = {
  a: 1
}

// 导出修改函数
// 给a 加1
export const globalActions = self => ({
  add() {
    self.setState(state => ({
      a: state.a + 1
    }))
  },

  
})