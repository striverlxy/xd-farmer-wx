import React from "react";
import { ImagePicker, List } from 'antd-mobile'
import { useHistory } from "react-router-dom";

const Item = List.Item;

const My = () => {

    const history = useHistory()

    return (
        <div>
            <div style={styles.top_container}>
                <img 
                    src="./mine_bg_3x.png"
                    style={styles.bg_img} 
                />
                <div style={styles.logout}>
                    <img 
                        style={styles.logoutImg} 
                        src="./icon_out_3x.png"
                    />
                    <div style={styles.logoutTxt}>退出</div>
                </div>
                <div style={styles.userWrapper}>
                    <div style={styles.user}>
                        <img style={styles.avatarImg} src="./mine_def_touxiang_3x.png" />
                        <div style={styles.user_info_mobile}>请登录</div>
                    </div>
                </div>
            </div>
            <List>
                <Item arrow="horizontal" onClick={() => history.push('/my/authInfo')}>我的资料</Item>
                <Item arrow="horizontal" onClick={() => {}}>我的供货</Item>
            </List>
        </div>
    )
}

const styles = {
    top_container: {
        height: 220,
		position: 'relative',
		display: 'flex',
        flexDirection: 'column',
    },
    bg_img: {
        position: 'absolute',
		width: '100%',
		height: 220,
    },
    logout: {
        width: 55,
		height: 18,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: '21px 0 12px 16px',
		position: 'relative',
		zIndex: 2
    },
    logoutImg: {
		width: 12,
		height: 12,
		marginRight: 6
	},

	logoutTxt: {
		fontSize: 14,
		color: '#fefefe',
		lineHeight: 14
	},

	userWrapper: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		zIndex: 2
	},

	user: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		position: 'relative',
		zIndex: 2
	},
	avatarImg: {
		width: 80,
		height: 80,
		borderRadius: '50%',
		alignSelf: 'center'
	},
	userInfo: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 15,
		alignItems: 'center'
	},
	user_info_mobile: {
		marginTop: 15,
		fontSize: 14,
		color: '#fefefe',
		alignSelf: 'center',
		padding: '0 25px'
	}
}

export default My