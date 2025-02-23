import style from './Description.module.css';

export default function Description() {
    return(
    <div className={style.description_container}>
    <h1 className={style.main_title}>Sip Happens Café</h1>
    <p className={style.description_text}>
        Please leave your feedback about our service by selecting one of the options below.
    </p>
    </div>
    )
}