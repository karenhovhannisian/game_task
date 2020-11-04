import { Layout, Button, Alert } from 'antd';
import './GameLayout.scss'
import {Board} from "../Board/Board";
import React, { useEffect, useState } from "react";
import GameService from "../../GameService";
import {BOARD} from "../../constants";
import {Score} from "../Score/Score";

const { Header, Content, Footer } = Layout;

export const GameLayout = () => {
    const [gameData, setGameData] = useState({});
    const [board, setBoard] = useState(BOARD);
    const [winner, setWinner] = useState('');
    const [score, setScore] = useState({});

    useEffect(() => {
        GameService.getScore()
            .then(({data}) => setScore(data.result))
    }, [winner])

    useEffect(() => {
        if (gameData.board) {
            setBoard(gameData.board)
        } else {
            GameService.getGameData()
                .then(({data}) => setGameData(data.result))
        }
        if (gameData.winner) {
            setWinner(gameData.winner)
        } else {
            setWinner('')
        }
    }, [gameData]);

    const resetGameScore = () => {
        GameService.resetScore()
            .then(({data}) => {
                setScore(data.result)
            })
    }

    const move = (value) => {
        GameService.move(value)
            .then(() =>
                GameService.getGameData()
                    .then(({data}) => setGameData(data.result))
            )
    }

    const resetGame = () => {
        GameService.reset()
            .then(() =>
                GameService.getGameData()
                    .then(({data}) => {
                        setGameData(data.result);
                        resetGameScore();
                    })
            )
    }

    const newGame = () => {
        GameService.newGame()
            .then(({data}) => {
                setGameData(data.result)
                GameService.getScore()
                    .then(({data}) => setScore(data.result))
            })
    }

    return (
        <Layout className="layout">
            <Header>
                <Button onClick={() => resetGame()} type="default">RESET</Button>
                <Button onClick={() => newGame()} type="default">PLAY AGAIN</Button>
            </Header>
            <Content style={{ padding: '0 50px' }}>
               <Score score={score} />
                <div className="site-layout-content">
                    {winner &&
                    <Alert
                        style={{ margin: 'auto', marginBottom: 20, width: 200, fontSize: 30 }}
                        message={winner === 'ai' ? 'You Lose' : 'You Win'}
                        type={winner === 'ai' ? 'error' : 'success'}
                    />
                    }

                   <Board bord={board} move={move} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
    )
}