import { List, Picker, InputItem, ImagePicker, NavBar, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AuthInfo = () => {

    const history = useHistory()

    const farmerType = [
        {
            label: '企业',
            value: '1'
        },
        {
            label: '个人',
            value: '2'
        }
    ]

    const [imageList, setImageList] = useState([])
    const onChange = (files, type, index) => {
        // console.log(files, type, index);
        // this.setState({
        //   files,
        // });
    };
    const onAddImageClick = e => {
        let files = imageList.slice()
        files.concat({
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '3',
        })
        setImageList(files)
    };
    return (
        <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.go(-1)}
            >我的审核信息</NavBar>
            <List renderHeader={() => '农户类型'}>
                <WhiteSpace />
                <Picker data={farmerType} cols={1}>
                    <List.Item arrow="horizontal">农户类型</List.Item>
                </Picker>
                <WhiteSpace />
            </List>
            <List renderHeader={() => '基本信息'}>
                <InputItem
                    clear
                    placeholder="请输入农场名称"
                >农场名称</InputItem>
                <InputItem
                    type="phone"
                    clear
                    placeholder="请输入管理员手机号码"
                >手机号码</InputItem>
                <InputItem
                    clear
                    placeholder="请输入管理员身份证号"
                >身份证号</InputItem>
                <InputItem
                    type="digit"
                    clear
                    placeholder="请输入土地测量面积"
                    extra="平方米"
                >土地面积</InputItem>
            </List>
            <List renderHeader={() => '土地测量面积图片'}>
                <WhiteSpace />
                <ImagePicker
                    length="6"
                    files={imageList}
                    onChange={onChange}
                    selectable={imageList.length < 7}
                    onAddImageClick={onAddImageClick}
                />
                <WhiteSpace />
            </List>
            <WingBlank>
                <Button type="primary" style={{marginTop: 20}}>提交</Button>
            </WingBlank>
        </div>
    )
}

export default AuthInfo