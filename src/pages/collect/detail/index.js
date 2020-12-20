import React, { useState } from "react";
import { List, NavBar, Icon } from 'antd-mobile';
import { useHistory, useLocation } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

const CollectDetail = () => {

    const { state } = useLocation()
    const history = useHistory()

    return (
        <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.go(-1)}
            >集采单详情</NavBar>
            <List renderHeader={() => state.collect.name}>
                <Item multipleLine extra={50 + "份"}>
                    黄瓜 <Brief>300g</Brief>
                </Item>
                <Item multipleLine extra={150 + "份"}>
                    青菜 <Brief>600g</Brief>
                </Item>
            </List>
        </div>
    )
}

export default CollectDetail