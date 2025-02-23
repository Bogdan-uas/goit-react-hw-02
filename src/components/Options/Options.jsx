import style from './Options.module.css';

export default function Options() {
    return (
    <div className={style.options_container}>
    <button className={style.options_button}>Good</button>
    <button className={style.options_button}>Neutral</button>
    <button className={style.options_button}>Bad</button>
    </div>
    )
}