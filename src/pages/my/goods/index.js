import { List, Picker, InputItem, ImagePicker, NavBar, Icon, Button, SearchBar, WhiteSpace } from 'antd-mobile'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;

const Goods = () => {

    const history = useHistory()

    const gotoGoodsCollectListPage = () => {
        history.push('/my/goods/collect')
    }

    return (
        <div style={{height: '100vh'}}>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.go(-1)}
            >我的供货商品</NavBar>
            <SearchBar placeholder="Search" maxLength={8} />
            <List>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => gotoGoodsCollectListPage()}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
                <WhiteSpace />
                <Item
                    thumb={<img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" style={{width: 64, height: 64}}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    extra="添加供货仓"
                >大白菜 <Brief><div>售价：10元</div><div>分账比例：90%</div></Brief></Item>
            </List>

            <div style={styles.good_plus}><span style={{marginBottom: 6}}>+</span></div>
        </div>
    )
}

const styles = {
    good_plus: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: '#108ee9',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        bottom: 50,
        right: 30,
        position: 'absolute'
    },
}

export default Goods