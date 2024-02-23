import type { Metadata } from 'next';
import { fetchApiPOST, getAllAccordPages } from '@/components/Api';

import VkComments from '@/components/Vk/VkComments';

/*
https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: '321Высоцкий // В каждом окне Советского Союза',
  description: '123Аккорды к песням Высоцкого',
};*/

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

/**
 * 
 document.addEventListener('DOMContentLoaded', function() {
  var iframes = document.querySelectorAll('.accords iframe');
  iframes.forEach(function(iframe) {
    var width = iframe.offsetWidth;
    var height = width * 1; // Вычисляем высоту, например, как 100% от ширины
    iframe.style.height = height + 'px';
  });
});* @returns 
 */

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
