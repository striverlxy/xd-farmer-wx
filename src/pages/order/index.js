import React, { useState } from "react";
import { Tabs, WhiteSpace, Badge, List, Calendar, SearchBar } from 'antd-mobile';
import { useHistory } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

const Order = () => {

    const history = useHistory()

    const [collectList, setCollectList] = useState([
        {
            id: 1,
            name: '南京集配仓',
            ratioMoney: '200'
        },
        {
            id: 2,
            name: '上海集配仓',
            ratioMoney: '198'
        },
        {
            id: 3,
            name: '广州集配仓',
            ratioMoney: '300'
        },
        {
            id: 1,
            name: '南京集配仓',
            ratioMoney: '200'
        },
        {
            id: 2,
            name: '上海集配仓',
            ratioMoney: '198'
        },
        {
            id: 3,
            name: '广州集配仓',
            ratioMoney: '300'
        },
        {
            id: 1,
            name: '南京集配仓',
            ratioMoney: '200'
        },
        {
            id: 2,
            name: '上海集配仓',
            ratioMoney: '198'
        },
        {
            id: 3,
            name: '广州集配仓',
            ratioMoney: '300'
        }
    ])

    const tabs = [
        { title: <Badge text={'今日(20)'}>今日分账单</Badge> },
        { title: <Badge>历史分账单</Badge> },
    ];

    const gotoCollectDetailPage = order => {
        history.push('/order/detail', {order: order})
    }

    const renderCollectList = () => {
        return (
        <List style={{width: '100%'}}>
            {
                collectList.map((item, index) => {
                    return (
                        <Item arrow="horizontal" key={index} multipleLine onClick={() => gotoCollectDetailPage(item)}>
                            {item.name} {`（分账：${item.ratioMoney}）`}
                        </Item>
                    )
                })
            }
        </List>
        )
    }


    const [calendarShow, setCalendarShow] = useState(false)
    const handleCalendarClose = () => {
        setCalendarShow(false)
    }
    const handleCalendarOpen = () => {
        setCalendarShow(true)
    }
    const handleCalendarOk = (startTime, endTime) => {
        console.log(startTime)
        console.log(endTime)
        setCalendarShow(false)
    }

    return (
        <div style={{height: 'calc(100vh - 50px)'}}>
            <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
                    { renderCollectList() }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <SearchBar placeholder="添加时间范围" onFocus={handleCalendarOpen} />
                    { renderCollectList() }
                </div>
            </Tabs>
            <Calendar
                visible={calendarShow}
                onCancel={handleCalendarClose}
                onConfirm={handleCalendarOk}
                defaultDate={new Date()}
            />
        </div>
    )
}

export default Order