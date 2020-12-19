import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import Home from '../home'
import Collect from '../collect'
import Order from "../order";
import XdService from "../xdService";

const Index = () => {

    const [current, setCurrect] = useState(1)


    const renderBottomTabBar = () => {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
            `    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selected={current == 1}
                        // badge={1}
                        data-seed="logId"
                        onPress={() => setCurrect(1)}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="集采单"
                        key="collect"
                        // badge={'new'}
                        selected={current == 2}
                        data-seed="logId1"
                        onPress={() => setCurrect(2)}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="分帐单"
                        key="order"
                        // dot
                        selected={current == 3}
                        onPress={() => setCurrect(3)}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="鲜道服务"
                        key="service"
                        selected={current == 4}
                        onPress={() => setCurrect(4)}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }

    const renderPage = () => {
        return (
            <div>
                { current == 1 && <Home /> }
                { current == 2 && <Collect /> }
                { current == 3 && <Order /> }
                { current == 4 && <XdService /> }
            </div>
        )
    }

    return (
        <div>
            {renderPage()}
            {renderBottomTabBar()}
        </div>
    )
}

export default Index