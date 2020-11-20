import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class className extends Component {
    constructor() {
        super();

        this.state = {
            products: [{ "name": "KTM Duke", "img": "1.jpg", "id": 1, "price":   "2 lakh", "engine": "299 cc" },
            { "name": "KTM RC", "img": "2.jpg", "id": 2, "price": "2.2 lakh",   "engine": "299 cc" },
            { "name": "Ninja", "img": "3.jpg", "id": 3, "price": "3.7 lakh",   "engine": "350 cc" },
            { "name": "BMW S", "img": "4.jpg", "id": 4, "price": "6.8 lakh",   "engine": "800 cc" },
            { "name": "Hayabusa", "img": "5.jpg", "id": 5, "price": "9.2 lakh",   "engine": "1340 cc" },
            ],
            compare: {
              // The arr variable stores the id of selected components
                arr: []
            }
        }
    }

    render() {
        return (
            <Row>
                {this.state.products.map((product, index) => (
                    <Col key={product.id} md="2" lg="2">
                        <Card body outline engine="primary">
                            <img height="120px" width="240px" src={require("../assets/images/" + product.img)}/>
                            <CardTitle>{product.name}</CardTitle>
                            <Button type="button" id={product.id} onClick={this.handleClick}>Button</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default className;