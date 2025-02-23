import style from './Options.module.css';

export default function Options() {
    return (
    <div className={style.options_container}>
    <button type='button' className={style.options_button}>Good</button>
    <button type='button' className={style.options_button}>Neutral</button>
    <button type='button' className={style.options_button}>Bad</button>
    </div>
    )
}