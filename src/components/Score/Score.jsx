import React from 'react';
import {Breadcrumb, Card, Col, Row, Statistic} from "antd";

export const Score = ({score}) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Player"
                            value={score.player}
                            valueStyle={{ color: score.player > score.ai ? '#3f8600' : '#cf1322' }}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="CPU"
                            value={score.ai}
                            valueStyle={{ color: score.player < score.ai ? '#3f8600' : '#cf1322' }}
                        />
                    </Card>
                </Col>
            </Row>
        </Breadcrumb>
    )
}