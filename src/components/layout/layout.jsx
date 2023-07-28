import styles from './layout.module.scss'
import {List} from 'react-bootstrap-icons'
const Layout = (props)=>{
    const { children} = props

    return <>
    <div className={styles.burgerMenu}>
       <List/>
    </div>
   {children}
    </>

}

export default Layout