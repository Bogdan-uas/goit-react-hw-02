import style from './Feedback.module.css'

export default function Feedback({ good, neutral, bad, total, percentage }) {
    return (
    <>
        <div className={style.feedback_container}>
        <p className={style.feedback_ps}>Good: {good}</p>
        <p className={style.feedback_ps}>Neutral: {neutral}</p>
        <p className={style.feedback_ps}>Bad: {bad}</p>
        <p className={style.feedback_ps}>Total: {total}</p>
        <p className={style.feedback_ps}>Positive: {percentage}%</p>
        </div>
    </>
    )
}