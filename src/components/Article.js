import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const getMinutesToRead = (minutes) => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getMinutesToRead(minutes)}</p>
    </article>
  );
};

export default Article;
