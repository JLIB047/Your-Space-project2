async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[id="post-title"]').value;
    const post_url = document.querySelector('input[id="post_url"]').value;

  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);