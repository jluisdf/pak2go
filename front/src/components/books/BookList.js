import React from 'react'
import { Row, Col, Card } from 'antd'

const BookList = ({ books }) => {

    return (
        <Row gutter={16}>
            {books.map((book, index) => (
                <Col
                    span={8}
                    key={index}
                    className="mt-2"
                >
                    <Card title={book.title}>
                        <p><b>Autor: </b> {book.author}</p>
                        <p><b>Categoria: </b> {book.category}</p>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default BookList
