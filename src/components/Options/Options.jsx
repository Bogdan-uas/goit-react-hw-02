import style from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback, resetFeedback }) {
return (
    <div className={style.options_container}>
    <button
        type="button"
        onClick={() => updateFeedback("good")}
        className={style.options_button}
    >
        Good
    </button>
    <button
        type="button"
        onClick={() => updateFeedback("neutral")}
        className={style.options_button}
    >
        Neutral
    </button>
    <button
        type="button"
        onClick={() => updateFeedback("bad")}
        className={style.options_button}
    >
        Bad
    </button>
    {totalFeedback > 0 && (
    <button type="button" onClick={resetFeedback} className={style.options_reset_button}>
    Reset
    </button>
)}
    </div>
);
}