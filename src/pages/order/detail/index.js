import React, { useState } from "react";
import { List, NavBar, Icon } from 'antd-mobile';
import { useHistory, useLocation } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

const OrderDetail = () => {

    const { state } = useLocation()
    const history = useHistory()

    return (
        <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.go(-1)}
            >分账单详情</NavBar>
            <List renderHeader={() => state.order.name}>
                <Item multipleLine extra={28374 + '元'}>
                    黄瓜 <Brief>规格：300g ｜ 数量：50份</Brief>
                </Item>
                <Item multipleLine extra={48267 + '元'}>
                    青菜 <Brief>规格：600g ｜ 数量：150份</Brief>
                </Item>
            </List>
        </div>
    )
}

export default OrderDetail