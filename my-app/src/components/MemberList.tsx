import React from "react";
import { useEffect } from "react";
import { List } from "semantic-ui-react";
import Group from "./Group";
import MemeberView from "./Member";
import useRepository from "./Repository";

export default () => {
    const repostiory = useRepository()

    useEffect(() => {
        repostiory.fetchMembers()
    }, [])


    return (
        <List>
            {repostiory.store.members.map((member) => <List.Item key={member.id}><MemeberView {...member}></MemeberView></List.Item>)}
        </List>
    );
}