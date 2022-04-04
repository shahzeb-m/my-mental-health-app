const BASE_URL = '/api/users';

async function updateQuoteCategoryDB(category) {
  try {
    await fetch(`${BASE_URL}/update-category`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
      }),
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function getThemeColour() {
  try {
    const response = await fetch(`${BASE_URL}/get-colour`);
    const res = await response.json();
    return res ? res.colour : 'default';
  } catch (err) {
    console.log(err);
  }
}

async function updateThemeColourDB(colour) {
  try {
    await fetch(`${BASE_URL}/update-colour`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        colour,
      }),
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteUser() {
  try {
    const response = await fetch(`${BASE_URL}/delete`, {
      method: 'DELETE',
    });
    return response.status !== 500;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export {
  updateQuoteCategoryDB,
  getThemeColour,
  updateThemeColourDB,
  deleteUser,
};
