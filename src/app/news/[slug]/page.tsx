import { fetchApiPOST, getAllPostsNewsWithSlug } from '@/components/Api';

async function getPost(params: { slug: string }) {
  const query = `
  query getPostBySlug($slug: String) {
    page(slug: $slug) {
      title,
      content
    } 
  }
  
  `;

  /*
  query GetPostByUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      
    }
  }
*/

  const variables = { slug: params.slug };
  console.log('variables: ' + variables);
  const responseBody = await fetchApiPOST(query, variables);
  console.log('=======================================');
  console.log('responseBody: ' + responseBody);
  console.log('=======================================');
  if (responseBody && responseBody.data) {
    return responseBody;
  } else {
    throw new Error('Failed to fetch the page');
  }
}

export default async function PageDetails({ params }: { params: { slug: string } }) {
  const page = await getPost(params);
  console.log(page);
  return (
    <>
      <h1>deddddddddddddddddddddd</h1>
      {/*<h1>{page.title}</h1>
      <div key={page.slug}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>*/}
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllPostsNewsWithSlug();

  return posts.edges.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
