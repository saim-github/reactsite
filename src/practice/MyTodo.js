import React from 'react';

const todo = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 }
];
export default function MyTodo() {
    const [todoArr, setTodoArr] = React.useState(todo);
    const [addTodo, setAddTodo] = React.useState();
    // const [check, setCheck] = React.useState(true);
    // const [del, setDel] = React.useState();

    const todos = todo.map((value, key) => {
        return (
            <>
                <div style={{ display: 'flex', width: '250px', margin: '5px' }}>
                    <input type="checkbox" name='check' />
                    <li value={value.name} key={key}>{value.name}</li>
                    <div className='btns'>
                        <button type='button' name='edit'>Edit</button>
                        <button type='button' name='delete'>Delete</button>
                    </div>
                </div>
            </>
        );
    });

    const updateTodo = () => {
        // console.log('Hi');
    };

    return (
        <>
            <div>
                <h3>Add Todo from here:</h3>
                <label htmlFor='newTodo'>Todo Item: </label>
                <input
                    type='text'
                    name='newTodo'
                    placeholder='Enter Your TODO'
                    value={addTodo}
                    onChange={(e) => setAddTodo(e.target.value)}
                />
                <button type='button' name='add' onClick={updateTodo}>Add</button>
                <p>Todo: {addTodo}</p>
            </div>
            <h3>Todo lists:</h3>
            <ul style={{ listStyleType: 'none' }}>{todos}</ul>

        </>
    )
}
