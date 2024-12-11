import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, date: new Date() }]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text} - {comment.date.toLocaleString()}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Novo comentário"
      />
      <button onClick={addComment}>Adicionar</button>
    </div>
  );
};

export default Comments;
