import styles from "./styles.module.css"


export default function Paragrafo(props){
    return(
        <div className={styles.p}>
            
            <p>{props.title}</p>
                
        </div>
    )
}