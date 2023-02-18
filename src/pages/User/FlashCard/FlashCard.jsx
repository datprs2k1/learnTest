import {
  CaretLeftFilled,
  CaretRightFilled,
  LeftCircleOutlined,
  LeftOutlined,
  RightCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Card, Carousel, Row, Button, Col, Image } from 'antd';
import React, { useRef } from 'react';

import './FlashCard.css';
import FlipCard from '@/components/FlipCard/FlipCard';
import Icon from '@ant-design/icons/lib/components/Icon';

function FlashCard(props) {
  const contentStyle = {
    margin: 'auto',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    objectFit: 'fill',
    height: `calc(100vh - 200px)`,
  };

  const carousel = useRef();

  return (
    <Row>
      <Col xs={24} md={{ span: 16, offset: 4 }} style={contentStyle}>
        <Carousel effect="fade" dots={false} ref={carousel}>
          <div>
            <FlipCard front="ABC" back="BCA" />
          </div>
          <div>
            <FlipCard front="BCD" back="DCA" />
          </div>
        </Carousel>
        <Row>
          <Col span={12}>
            <Button size="large" ghost style={{ width: '80%' }} onClick={() => carousel.current.prev()}>
              <CaretLeftFilled />
            </Button>
          </Col>
          <Col span={12}>
            <Button size="large" ghost style={{ width: '80%' }} onClick={() => carousel.current.next()}>
              <CaretRightFilled />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default FlashCard;
