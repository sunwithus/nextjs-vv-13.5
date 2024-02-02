import { fetchApiGET } from '@/components/Api';
/*{post(id: "s-novyim-godom", idType: SLUG) {title uri}} */

async function getPage() {
  const query = `
  query getPageByUri {
    page(id: "biography", idType: URI) {
      title
      content
    }
  }
  `;

  const responseBody = await fetchApiGET(query);
  if (responseBody && responseBody.page) {
    return responseBody.page;
  } else {
    throw new Error('Failed to fetch the post');
  }
}

export default async function Biography() {
  const page = await getPage();
  return (
    <>
      <div className="mt-16">
        <div className="prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </>
  );
}
