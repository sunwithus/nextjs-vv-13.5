import { fetchApiPOST, getAllPostsNewsWithSlug } from '@/components/Api';
/*{post(id: "s-novyim-godom", idType: SLUG) {title uri}} */

async function getPost(params: { slug: string }) {
  const query = `
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      
    }
  } 
  `;

  const variables = { slug: params.slug };
  console.log('variables + params === ' + variables.slug + '  ' + params);
  const responseBody = await fetchApiPOST(query, variables);
  if (responseBody && responseBody.post) {
    return responseBody.post;
  } else {
    throw new Error('Failed to fetch the post');
  }
}

export default async function PostDetails({ params }: { params: { slug: string } }) {
  const post = await getPost(params);

  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllPostsNewsWithSlug();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
