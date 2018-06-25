import React from 'react';

function Todo(props) {

  if(props.tasks.length > 0) {
    let {tasks} = props;

    return(
      <div>
        
          {tasks.map((el, i) => <h2 key={i}>{el}</h2>)}
        
      </div>
    );

  }
  return null;
}

export default Todo;