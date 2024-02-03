import { fetchApiPOST, getAllAccordPages } from '@/components/Api';

import VkComments from '@/components/Vk/VkComments';

async function getPage(params: { slug: string }) {
  const query = `
    query getPageBySlug($slug: String) {
      page: pageBy(uri: $slug) {
        title,
        content
      } 
    }
  `;
  const variables = { slug: params.slug };

  console.log('variables + params === ' + variables.slug + '  ' + params);
  const responseBody = await fetchApiPOST(query, variables);
  if (responseBody && responseBody.page) {
    return responseBody.page;
  } else {
    throw new Error('Failed to fetch the page');
  }
}

export default async function PageDetails({ params }: { params: { slug: string } }) {
  const page = await getPage(params);
  const content = page.content.replace(/<\/sup> <sup>/g, '</sup><span>&nbsp;</span><sup>'); /*при width: 0px; элементы sup сливаются в один, накладываются, убираем наложение*/

  return (
    <>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <br />
      <div className="mb-8">
        <VkComments />
  </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const pages = await getAllAccordPages();

  return pages.map((page: { slug: string }) => ({
    slug: page.slug,
  }));
}
