import React from "react";
import { useEffect } from "react";
import { List } from "semantic-ui-react";
import Group from "./Group";
import useRepository from "./Repository";

export default () => {
    const repostiory = useRepository()

    useEffect(() => {
        repostiory.fetchGroups().then(() => console.log(repostiory.store))
    }, [])


    return (
        <List>
            {repostiory.store.groups.map((group) => <List.Item key={group.id}><Group description={group.description} id={group.id} name={group.name}></Group></List.Item>)}
        </List>
    );
}