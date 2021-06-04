import { createContext } from "react";

export interface Group {
    name: string;
    id: string;
    description: string
}

export interface Member {
    name: string;
    secondName: string;
    group: Group;
    email: string;
    id: string;
}

export interface MemberForm {
    name: string;
    secondName: string,
    email: string,
    group: number;
}

export type GroupForm = Group;


export const storeContext = createContext<{store: { groups: Group[], members: Member[], memberForm: MemberForm }, updateStore: any}>({store: {
    groups: [],
    members: [],
    memberForm: {
        name: '',
        secondName: '',
        email: '',
        group: 0
    },

},updateStore: null});