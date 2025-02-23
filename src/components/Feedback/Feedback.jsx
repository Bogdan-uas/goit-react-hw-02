import style from './Feedback.module.css'

export default function Feedback({ good, neutral, bad }) {
    return (
    <>
        <div className={style.feedback_container}>
        <p className={style.feedback_ps}>Good: {good}</p>
        <p className={style.feedback_ps}>Neutral: {neutral}</p>
        <p className={style.feedback_ps}>Bad: {bad}</p>
        </div>
    </>
    )
}