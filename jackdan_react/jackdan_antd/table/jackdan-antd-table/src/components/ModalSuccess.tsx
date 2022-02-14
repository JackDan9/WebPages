import React from 'react';
import { Modal } from 'antd';

function ModalSuccess() {

  const handleOk = () => {
    console.log("ok");
  } 

  const handleContent = (_modal:any) => {
    Modal.destroyAll();
    debugger;
    console.log(_modal);
  };

  const handleOpenModal = () => {
    Modal.success({ 
      title: "温馨提示",
      content: <span onClick={() => handleContent(Modal)}>111111</span>,
      okText: "确定",
      okType: "primary",
      onOk: handleOk
    })
  };

  return (
    <div onClick={() => handleOpenModal()}>111</div>
  )
};

export default ModalSuccess;