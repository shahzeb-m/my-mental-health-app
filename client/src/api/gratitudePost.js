const BASE_URL = '/api/gratitude';

export async function getGratitudePostsDB() {
  try {
    const response = await fetch(`${BASE_URL}/get-all`);
    const res = await response.json();
    return res.reverse();
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateGratitudePosts(gratitudePost) {
  try {
    return await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gratitudePost,
      }),
    });
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteGratitudePost(id) {
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
