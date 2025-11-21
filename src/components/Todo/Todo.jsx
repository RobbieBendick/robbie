import React, { useState, useEffect } from 'react';
import { ref, push, onValue, remove, update } from 'firebase/database';
import { database } from '../../firebase';
import './Todo.scss';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  // Reference to the todos in Firebase
  const todosRef = ref(database, 'todos');

  // Listen for real-time updates
  useEffect(() => {
    const unsubscribe = onValue(todosRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const todosArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setTodos(todosArray);
      } else {
        setTodos([]);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Add a new todo
  const addTodo = async e => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const todo = {
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      timestamp: Date.now(),
    };

    try {
      await push(todosRef, todo);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Toggle todo completion
  const toggleTodo = async id => {
    const todoRef = ref(database, `todos/${id}`);
    const todo = todos.find(t => t.id === id);

    try {
      await update(todoRef, {
        completed: !todo.completed,
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Delete a todo
  const deleteTodo = async id => {
    const todoRef = ref(database, `todos/${id}`);

    try {
      await remove(todoRef);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Clear all completed todos
  const clearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed);

    try {
      await Promise.all(
        completedTodos.map(todo => remove(ref(database, `todos/${todo.id}`)))
      );
    } catch (error) {
      console.error('Error clearing completed todos:', error);
    }
  };

  if (loading) {
    return (
      <div className='todo-container'>
        <div className='loading'>Loading todos...</div>
      </div>
    );
  }

  return (
    <div className='todo-container'>
      <div className='todo-header'>
        <h1>Vintage Story To Do List</h1>
      </div>

      <form onSubmit={addTodo} className='todo-form'>
        <input
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder='Add a new todo...'
          className='todo-input'
        />
        <button type='submit' className='add-button'>
          Add Todo
        </button>
      </form>

      <div className='todo-stats'>
        <div className='stat-card'>
          <span className='stat-number'>{todos.length}</span>
          <span className='stat-label'>Total</span>
        </div>
        <div className='stat-card completed-card'>
          <span className='stat-number'>
            {todos.filter(t => t.completed).length}
          </span>
          <span className='stat-label'>Completed</span>
        </div>
        <div className='stat-card remaining-card'>
          <span className='stat-number'>
            {todos.filter(t => !t.completed).length}
          </span>
          <span className='stat-label'>Remaining</span>
        </div>
      </div>

      {todos.length > 0 && (
        <div className='todo-actions'>
          <button
            onClick={clearCompleted}
            className='clear-button'
            disabled={todos.filter(t => t.completed).length === 0}
          >
            Clear Completed
          </button>
        </div>
      )}

      <div className='todo-list'>
        {todos.length === 0 ? (
          <div className='empty-state'>
            <p>No todos yet. Add one above!</p>
          </div>
        ) : (
          todos
            .sort((a, b) =>
              a.completed === b.completed
                ? b.timestamp - a.timestamp
                : a.completed - b.completed
            )
            .map(todo => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <div className='todo-content'>
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className='todo-checkbox'
                  />
                  <span className='todo-text'>{todo.text}</span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className='delete-button'
                  title='Delete todo'
                >
                  ×
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Todo;
