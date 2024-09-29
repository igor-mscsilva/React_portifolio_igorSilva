import styles from "./styles.module.css"


export default function Button(props){
    return(
        <div className={styles.button}>
            
            <button type="submit"href="https://www.google.com.br">{props.title}</button>
                
        </div>
    )
}