import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LikeButton from './App';
import registerServiceWorker from './registerServiceWorker';

const e = React.createElement;

//ReactDOM.render(<App />, document.getElementById('root'));
// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });
registerServiceWorker();
