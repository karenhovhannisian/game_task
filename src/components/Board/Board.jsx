import React from 'react';
import { Col, Row } from "antd";
import './Board.scss'

export const Board = ({bord, move}) => {
    return (
        <div className='board'>
            <div className='bord-content'>
                {bord.map((section, index) => {
                    return (
                        <Row key={index}>
                            {section.map((item, i) =>
                               <Col
                                   onClick={() => move(item)}
                                   span={8}
                                   key={i}
                               >
                                   {typeof item === 'string' ? item : ""}
                               </Col>
                            )}
                        </Row>
                    )
                })}
            </div>
        </div>
    )
}