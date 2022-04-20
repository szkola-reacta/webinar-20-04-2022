const apiBaseUrl = "https://api.airtable.com/v0/YOUR_ID";

export const apiConfig = {
  postsList: `${apiBaseUrl}/posts`,
  postsDetail: (id) => `${apiBaseUrl}/posts/${id}`,
}

export const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

// apiConfig.postsList -> https://api.airtable.com/v0/YOUR_ID/posts?view=default
// apiConfig.postsDetail("abc") -> https://api.airtable.com/v0/YOUR_ID/posts/abc