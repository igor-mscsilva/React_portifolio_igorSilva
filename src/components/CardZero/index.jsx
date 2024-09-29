import styles from "./styles.module.css"


export default function CardZero(props){
    return(
        <div className={styles.container}>
            
            <div className={styles.links}>
                <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
                <a href={props.gitHubUrl} target="_blank">GitHub</a>
                <a href={props.twitterUrl} target="_blank">Twitter</a>
            
            </div>    
        </div>
    )
}