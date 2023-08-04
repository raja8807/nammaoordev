import styles from './nod_button.module.scss'

const Nodbutton = (props)=>{

    const {children} = props
    return <button className={styles.nod_button}>
        {children}
    </button>
}

export default Nodbutton