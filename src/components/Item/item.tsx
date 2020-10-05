import React, {FC} from 'react';
import { Button, Switch, Row, Col} from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './index.styl';
/**
 * props类型声明
 * 
 */

export interface MyComponentProps {
   listData?: string
}


const Item: FC<MyComponentProps> = (props) => (
    <div className="listBox">
       <Row gutter={16}>
            <Col className="gutter-row" span={8}>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                />
            </Col>
            <Col className="gutter-row" span={8}>
                hello world
            </Col>
            <Col className="gutter-row" span={8}>
            <Button type="link">删除</Button>
            </Col>
        </Row>
    </div>
)

export default Item;
