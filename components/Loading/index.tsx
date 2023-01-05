import styles from './Loading.module.css'
import {LoadingOutlined} from '@ant-design/icons'
import {Spin} from 'antd'

const antIcon = <LoadingOutlined style={{fontSize: 24}} />
export default function () {
    return (
        <div id={styles.loading}>
            <Spin indicator={antIcon} />
        </div>
    );
}

