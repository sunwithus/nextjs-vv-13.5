import type { Metadata, ResolvingMetadata } from 'next';
import { fetchApiPOST, getAllAccordPages } from '@/components/Api';

import VkComments from '@/components/Vk/VkComments';


/*
https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export const metadata: Metadata = {
  title: "Высоцкий // " + page.title,
  description: "Аккорды к " + page.title,
};
*/

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // fetch data
  const page = await getPage(params);

  return {
    title: page.title + ' // Аккорды',
    description: 'Аккорды к песне ' + page.title,
  };
}

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
      <div className="mb-8 overflow-hidden">
        {/** добавить layout, чтоб ВК комментарии были во всю длинну, сейчас .accords iframe {max-width: 100%;} */}
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
