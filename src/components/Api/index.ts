// Определение константы API_URL с использованием переменной среды WORDPRESS_API_URL
const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchApiPOST(
  query: string = "",
  variables: Record<string, any> = {}
) {
  // Устанавливаем заголовки запроса
  const headers: HeadersInit = { "Content-Type": "application/json" };

  // Выполняем POST запрос к API
  // Восклицательный знак (!) после переменной API_URL используется для явного указания TypeScript на то, что переменная не равна null или undefined.
  const res = await fetch(API_URL!, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    //cache: "no-store",
  });
  // Получаем данные из ответа в формате JSON
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function fetchApiGET(
  query: string = ""
  //variables: Record<string, any> = {}
) {
  const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //cache: "no-store",
  });

  const json = await res.json();
  if (!res.ok) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllAccordPages() {
  const query = `
  {
    pages(first: 1000, where: { parentIn: "cG9zdDo2", orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        slug
      }
    }
  }
  `;
  const data = await fetchApiGET(query);
  return data.pages.nodes;
}

export async function getAllPostsWithSlug() {
  const data = await fetchApiGET(`
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
        }
      }
  }
  `;
  const data = await fetchApiGET(query);
  return data.posts.nodes;
}

/** posts(first: 1000, where: {tag: "film"})  */
export async function getAllPostsFilmsWithSlug() {
  const query = `
  {
    posts(first: 1000, where: {tag: "film"}) {
      nodes {
          slug
          title
          content
        }
      }
  }
  `;
  const data = await fetchApiGET(query);
  return data.posts.nodes;
}
