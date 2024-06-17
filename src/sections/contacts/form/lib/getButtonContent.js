import { Spinner } from '../../../../assets/icons/Spinner'
import React from 'react'
import { Progress } from '../../../../constans/status'

export const getButtonContent = (status) => {
    switch (status) {
        case Progress.LOADING:
            return <Spinner />
        case Progress.SUCCESS:
            return 'Сообщение отправлено'
        case Progress.ERROR:
            return 'что-то пошло не так '
        default:
            return 'Отправить сообщение'
    }
}
