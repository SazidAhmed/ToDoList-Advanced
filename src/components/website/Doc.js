import { useState, useEffect } from 'react';
import { FaEye, FaRegCheckCircle } from 'react-icons/fa';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

function Doc() {
    return(
        <Container>
            <Row>
                <h5 className='mt-5'>Select Crews : </h5>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-3">
                <div class="d-flex flex-row mb-1">
                    <div class="p-1"><Form.Check aria-label="option 1" /></div>
                    <div class="p-1"><b>Select All</b></div>
                </div>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Crew</th>
                            <th>Email</th>
                            <th>Work On Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Check aria-label="option 1" />
                            </td>
                            <td>Bill</td>
                            <td>bill@gmail.com</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Check aria-label="option 1" />
                            </td>
                            <td>Joe</td>
                            <td>Joe@gmail.com</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Check aria-label="option 1" />
                            </td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>No</td>
                        </tr>
                      
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <div className="d-flex ">
                  <Button variant="success"><FaRegCheckCircle /> Submit</Button>
              </div>
            </Row>
        </Container>
    )
}

export default Doc;