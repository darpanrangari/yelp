import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'bearer rPbdeQ8fMVdKFZ7QvsjlPWk6o6vjIb5nm9p2tgA1HqYONt5hG45mMvN8R2XbJV4OT2zH6FZsBQjdnAdDqk5eUEssdoou-s9rw-r8iEUQToZbqR-d4aIIDSrEePhWXXYx',
  },
});
