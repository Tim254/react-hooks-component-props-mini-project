import React from "react";

function emojiList(minutes){
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojisToDisplay = "";
    for( let i = 0; i < minutes; i += interval ){
        emojisToDisplay += emoji;
    }

    return emojisToDisplay;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emojisToDisplay = emojiList(minutes);
  
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} • {emojisToDisplay} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  

export default Article;