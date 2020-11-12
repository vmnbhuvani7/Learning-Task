import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Accordion, Card, Modal } from 'react-bootstrap';

const QandA = () => {
    const [show, setShow] = useState({
        model: false,
        toggle: true
    });

    const handleClose = () => setShow({
        model: false,
        toggle: true
    });
    const handleShow = () => setShow({
        model: true,
        toggle: true
    });

    const [qna, setQna] = useState({
        question: '',
        answer: '',
        todos: [],
        questionError: '',
        ansError: '',

    })
    const handleChange = (e) => {
        setQna({
            ...qna,
            [e.target.name]: e.target.value,
            // questionError: '',
            // ansError: '',
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        if (qna.question === "") {
            setQna({
                questionError: "please enter question"
            })
        }
        else if (qna.answer === "") {
            setQna({
                ansError: "please enter answer"
            })
        }
        else {
            setQna({
                todos: [
                    ...qna.todos,
                    {
                        ...qna.todos,
                        question: qna.question ? qna.question : '',
                        answer: [qna.answer],
                        id: Math.random().toString(36).substr(2, 9)
                    }
                ]
            })
            setShow({
                model: false,
                toggle: true
            })
        }
    }
    const submitAnsuweronly = (e) => {
        e.preventDefault()
        setQna({
            todos: [
                {
                    answer: [...qna.todos[0].answer, qna.answer]
                }
            ]
        })

    }
    const handleAnswer = () => {
        setShow({
            model: true,
            toggle: false
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <Button variant="primary" onClick={() => handleShow()}>
                    Add
            </Button>
                <Modal show={show.model} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    {show.toggle === true && (
                        <div>
                            <span> question:</span>
                            <input type="text" name="question" onChange={(e) => handleChange(e)} />
                            {/* <div className="text-danger">{qna.questionError}   </div> */}
                        </div>
                    )}
                    <div>
                        <span> answer :</span><input type="text" name="answer" onChange={(e) => handleChange(e)} />
                    <div className="text-danger">{qna.ansError}   </div>
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                        {show.toggle === true && (
                            <Button variant="primary" type="submit" onClick={submitHandler}>
                                Save Changes
                            </Button>
                        )}
                        {show.toggle === false && (
                            <Button variant="primary" type="submit" onClick={submitAnsuweronly}>
                                AddChanges
                            </Button>
                        )}

                    </Modal.Footer>
                </Modal>
            </form>

            {qna && qna.todos && qna.todos.length !== 0 && qna.todos.map(item => (
                <>
                    <Accordion>
                        <Card key={item.id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {item.question}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {item.answer.map((ans, index) => (
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    {index + 1} {ans}
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    ))}
                                    <div> <Button variant="primary" onClick={handleAnswer} >Add Answer</Button></div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
                </>
            ))}

        </div>
    )
}

export default QandA
