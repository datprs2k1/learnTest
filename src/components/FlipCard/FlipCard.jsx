import React, { useState } from 'react';
import { Row, Col, Image } from 'antd';
import { Typography } from 'antd';
import ReactCardFlip from 'react-card-flip';

function FlipCard(props) {
  const { Title } = Typography;

  const [flip, setFlip] = useState(false);

  const { front, back } = props;

  return (
    <>
      <Row onClick={() => setFlip(!flip)} style={{ height: `calc(100vh - 200px - 60px - 30px)` }}>
        <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }}>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <Row
              justify="center"
              align="middle"
              style={{
                height: `calc(100vh - 200px - 80px - 50px - 30px)`,
              }}
            >
              <Col md={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
                <Title style={{ color: '#d9dde8' }}>{front}</Title>
              </Col>
              <Col md={{ span: 12, order: 1 }} xs={{ span: 24, order: 1 }}>
                <Image
                  width={200}
                  height={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
            </Row>
            <Row
              justify="center"
              align="middle"
              style={{
                height: `calc(100vh - 200px - 80px - 50px - 30px)`,
              }}
            >
              <Col span={24}>
                <Title style={{ color: '#d9dde8' }}>{back}</Title>
              </Col>
            </Row>
          </ReactCardFlip>
        </Col>
      </Row>
    </>
  );
}

export default FlipCard;
