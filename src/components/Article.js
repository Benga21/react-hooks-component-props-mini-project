import React from 'react';
function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let emojiCount = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    const emojis = emoji.repeat(emojiCount);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
 