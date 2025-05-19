import css from './Options.module.css';

export default function Options({ onLeaveFeedback, hasFeedback, onReset }) {
    return (
        <div className={css.options}>
            <button onClick={() => onLeaveFeedback('good')}>Good</button>
            <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
            {hasFeedback && <button onClick={onReset}>Reset</button>}
        </div>
    );
}