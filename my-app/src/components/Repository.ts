import React, { createContext, useContext } from 'react'
import { pathToFileURL } from 'url';
import { BASE_URL } from "../constants";
import { patch, post, remove } from "../helpers/http";
import { storeContext } from './store';


const useRepository = () => {
    const store = useContext(storeContext)

    const fetchGroups = () => fetch(BASE_URL + '/group')
        .then(r => r.json())
        .then(r => store.updateStore((prev: any) => ({ ...prev, groups: r })))


    const fetchMembers = () => fetch(BASE_URL + '/member')
        .then(r => r.json())
        .then(r => store.updateStore((prev: any) => ({ ...prev, members: r })))

    const addGroup = (name: string, description: string) => {
        post(BASE_URL + '/group', {
            name,
            description
        }).then(fetchGroups)
    }

    const removeGroup = (id: string) => {
        remove(BASE_URL + '/group', id).then(fetchGroups)
    }

    const updateGroup = (id: string, name: string, description: string) => {
        patch(BASE_URL + '/group', id, { name, description }).then(fetchGroups)
    }

    const addMember = (email: string, name: string, secondName: string, groupID: number) => {
        post(BASE_URL + '/member', {
            email,
            name,
            secondName,
            group: { id: groupID }
        })
            .then(fetchMembers)
    }

    const removeMember = (id: string) => {
        remove(BASE_URL + '/member', id).then(fetchMembers)
    }

    const updateMember = (id: string, email: string, name: string, secondName: string, groupID: number) => {
        patch(BASE_URL + '/member', id, {
            email,
            name,
            secondName,
            group: { id: groupID }
        }).then(fetchMembers)
    }


    return {
        fetchGroups,
        fetchMembers,
        addGroup,
        removeGroup,
        addMember,
        removeMember,
        updateMember,
        updateGroup,
        store: store.store,
    }
}

export default useRepository;