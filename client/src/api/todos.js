const BASE_URL = '/api/todo';

export async function getTodosDB() {
  try {
    const response = await fetch(`${BASE_URL}/get-all`);
    const res = await response.json();
    return res.reverse();
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateTodos(todo) {
  try {
    return await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
      }),
    });
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${BASE_URL}/delete/${id}`, {
      method: 'DELETE',
    });
    return response.status !== 500;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateTodo(id, completed) {
  try {
    await fetch(`${BASE_URL}/update/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}
