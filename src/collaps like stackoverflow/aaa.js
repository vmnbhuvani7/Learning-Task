import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, { Component } from 'react'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { ModalBody, ModalTitle } from 'react-bootstrap'
// import './Todoapp.css'

export default class Accordian extends Component {
    state = {
        show: false,
        list: [],
        formFeild: {
            id: '',
            question: '',
            answer: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            formFeild: {
                ...this.state.formFeild,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            list: [...this.state.list, { ...this.state.formFeild,
                 id: Math.random().toString(36).substr(2, 9),
                 answer: [this.state.formFeild.answer] }],
            formFeild: {
                id: '',
                question: '',
                answer: ''
            },
            show: false
        })
    }

    addAnsHandler = (item) => {
        console.log("jay", item);
        this.setState({
            ...this.state,
            formFeild: {
                ...this.formFeild,
                question: item.question,
                id: item.id
            },
            show: true
        })
    }

    render() {
        return (
            <>
                <div align="center">
                    <h1>Question-Answer</h1>
                    <Button variant="info" onClick={() => {
                        this.setState({
                            ...this.state, show: true
                        })
                    }}>OPEN</Button>
                </div>
                <Modal show={this.state.show} onHide={() => {
                    this.setState({
                        ...this.state,
                        show: false
                    })
                }} backdrop="static" keyboard={false}>
                    <ModalHeader closeButton>
                        <ModalTitle>Your Question--Answer</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <form onSubmit={this.submitHandler}>
                            {this.state.formFeild.id && (<b>id : {this.state.formFeild.id}</b>)}
                            <br/>
                            <b>Question:</b>
                            {
                                this.state.formFeild.question && this.state.formFeild.id ? <span>{this.state.formFeild.question}</span> :
                                    <input type="text" placeholder="Enter your question"
                                        onChange={this.handleInput}
                                        value={this.state.formFeild.question}
                                        name="question" style={{ width: "370px" }}
                                    />
                            }
                            <br /><br />

                            <b>Answer:</b> <textarea type="textarea" placeholder="Enter your ansewr"
                                onChange={this.handleInput}
                                value={this.state.formFeild.answer}
                                name="answer" style={{ width: "380px", height: "100px" }} />
                            <br /><br />
                            <Button variant="success" type="Submit">Submit</Button>
                        </form>
                    </ModalBody>
                </Modal>
                <br /><br />
                <div align="center">
                    <h3>Your all Questions - Answers are heare... </h3><br />
                    <Accordion>
                        <Card>

                            {
                                this.state.list.map((item) => {
                                    return (
                                        <div>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <b>Q-</b>{item.question}
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    {
                                                        item.answer.map((ans) => {
                                                            console.log(ans);
                                                            return (
                                                                <div>

                                                                    <b>Answer:</b>{ans}<br />
                                                                    <Accordion.Toggle as={Button} variant="link"
                                                                        onClick={() => this.addAnsHandler(item)}>Add Your Answer</Accordion.Toggle>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Card.Body>
                                            </Accordion.Collapse><br />

                                        </div>
                                    )
                                })
                            }
                        </Card>
                    </Accordion>
                </div>
            </>
        )
    }
}
// answer: [...qna.todos.answer, qna.answer],
// const handleQuestion = (e) => {
//     setQna({
//         ...qna,
//         question: e.target.value
//     })
// }
// const handleAnswer = (e) => {
//     setQna({
//         ...qna,
//         question: e.target.value
//     })
// }

{/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <input type="text" />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> */}