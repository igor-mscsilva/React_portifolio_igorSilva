import perfilImg from "../../assets/perfil.jpg"
import styles from "./styles.module.css"


export default function Card(props){
    return(
        <div className={styles.container}>
            <img className={styles.perfil} src={perfilImg} alt="Foto de Perfil" />
            
            <h2 className={styles.h2}>{props.title}</h2>     
        </div>
    )
}