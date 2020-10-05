import React, {FC} from 'react';
import { Row, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './App.css';

const App: FC = () => (
    <div className="container"> 
      <div className="content">
        <Row>
          <Col span={24}>
            <div style={{ marginBottom: 16 }}>
              <Input addonAfter={<PlusOutlined />} defaultValue="mysite" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={24}>col</Col>
        </Row>
      </div>
    </div>
)

export default App;
