import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Spin, Empty, Button, Input, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/books.duck'
import BookList from './BookList'
import { PlusOutlined } from '@ant-design/icons'
import RegisterBook from './RegisterBook';

const Books = (props) => {

    const dispatch = useDispatch();
    const { books } = useSelector(store => store.books);
    const [ bookList, setBookList ] = useState([]);
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    useEffect(() => {
        dispatch(getBooks())
    }, []);

    useEffect(() => {
        setBookList(books)
    }, [books]);

    const bookFinder = value => {
        if(value){
            let filterBooks = books.filter(book => {
                return book.title.toLowerCase().includes(value.toLowerCase())
                    || book.author.toLowerCase().includes(value.toLowerCase())
                    || book.category.toLowerCase().includes(value.toLowerCase())
            })
            setBookList(filterBooks)
        }else{
            setBookList(books)
        }
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <Card
            bordered={false}
            className="w-100 table-responsive"
            type="inner"
            title={<h2>Libros</h2>}
            extra={
                <Input
                    placeholder="Buscar"
                    style={{marginBottom: '1rem', width: 200 }}
                    onChange={(e) => bookFinder(e.target.value)}
                />
            }
        >
            <Spin
                spinning={false}
                tip="Cargando..."
            >
                <p className="text-right">
                    <Button type="text" onClick={showModal}>
                        <PlusOutlined /> Agregar
                    </Button>
                </p>
                {(books && books.length > 0) ?
                    <BookList books={bookList} />
                :
                    <Empty className="p-4" />
                }
            </Spin>
            <RegisterBook
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </Card>
    )
}

export default Books
