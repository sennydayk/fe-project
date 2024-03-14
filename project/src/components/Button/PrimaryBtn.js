import React from 'react';
import { Button } from 'antd';

const PrimaryBtn = ({ text }) => {
  return (
    <Button type="primary">{text}</Button>
  );
};

export default PrimaryBtn;