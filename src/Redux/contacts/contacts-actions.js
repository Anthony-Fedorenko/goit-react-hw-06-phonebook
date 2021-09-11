import {createAction} from '@reduxjs/toolkit'
import {v4} from 'uuid'

const addContact = createAction('contacts/add', ({name, number}) => ({
    payload: {
        id: v4(),
        name,
        number,
    },
}))
const deleteContact = createAction('contacts/delete')
const changeFilter = createAction('contacts/changeFilter')

export default {addContact, deleteContact, changeFilter}