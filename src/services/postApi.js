export const getData = async (url) => {
    const data = await fetch(url);
    const posts = await data.json();
    return posts;
  };