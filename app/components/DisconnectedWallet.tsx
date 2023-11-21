import React, { FC } from 'react';
import { Col, Row } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

export const DisconnectedWallet: FC = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{ width: 546, margin: '0px auto', textAlign: 'center' }} >
              <div>
                <WalletOutlined style={{ fontSize: 175 }} />
              </div>
              <span>Connect your wallet</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};