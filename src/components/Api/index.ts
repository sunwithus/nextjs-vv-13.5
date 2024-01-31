const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchApiPOST(query: string = '', variables: Record<string, any> = {}) {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL!, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function fetchApiGET(query: string = '', variables: Record<string, any> = {}) {
  const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await res.json();
  if (!res.ok) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllAccordPages() {
  const query = `
  {
    pages(first: 5000, where: { parentIn: "cG9zdDo2", orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        slug
        content
        
      }
    }
  }
  `;
  const data = await fetchApiGET(query);
  return data.pages.nodes;
}

export async function getAllPostsWithSlug() {
  const data = await fetchApiPOST(`
    {
      posts(first: 1000) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsNewsWithSlug() {
  const query = `
  {
    posts(first: 1000, where: {tag: "news"}) {
      nodes {
          slug
          title
          content
          date
        }
      }
  }
  `;
  const data = await fetchApiPOST(query);
  return data.posts.nodes;
}

export async function getAllPostsFilmsWithSlug() {
  /* переделать, убрать узел edges, как в предыдущем запросе */
  const data = await fetchApiPOST(`
  {
    posts(first: 1000, where: {tag: "film"}) {
      edges {
        node {
          slug
          title
          content
        }
      }
    }
  }
  `);
  return data?.posts;
}
