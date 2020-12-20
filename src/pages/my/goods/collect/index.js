import { List, Picker, InputItem, ImagePicker, NavBar, Icon, Button, SearchBar, WhiteSpace } from 'antd-mobile'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const GoodCollect = () => {

    const history = useHistory()

    return (
        <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.go(-1)}
            >商品供货仓库</NavBar>
            <List>
                <InputItem
                    type="money"
                    clear
                    placeholder="请输入集配仓供货数量"
                    value={10}
                >南京集配仓</InputItem>
            </List>
        </div>
    )
}

export default GoodCollect