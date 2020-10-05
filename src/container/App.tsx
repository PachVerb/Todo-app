import React, {FC} from 'react';
import { Row, Col } from 'antd';
import './App.css';


const App: FC = () => (
    <div className="container"> 
      <Row>
        <Col span={12} offset={6}>
          col-6 col-offset-6
        </Col>
      </Row>
    </div>
)

export default App;
