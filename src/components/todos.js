import React, { memo } from 'react';

const Todos = ({todo, addTodo}) => {
    return ( 
        <>
        <h1>My Todos</h1>
        {todo.map((todo,index)=>{
            return <p key={index}> {todo + index} </p>
        })}

        <button onClick = {addTodo}> Add Todos </button> 
        </>
     );
}
 
export default memo(Todos);