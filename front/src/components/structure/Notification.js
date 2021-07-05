import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'antd';
import { hideError } from '../../redux/notification.duck'


const Notification = () => {

    const dispatch = useDispatch()
    const { isOpen, message, type } = useSelector(store => store.notification);

    const handleClose = () => {
        dispatch(hideError())
    };

    return (
        <Modal title="Atención" visible={isOpen} onOk={handleClose} onCancel={handleClose}>
            <p>{message}</p>
        </Modal>
    )
}

export default Notification
