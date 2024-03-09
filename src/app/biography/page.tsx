import { fetchApiGET } from "@/components/Api";
/*{post(id: "s-novyim-godom", idType: SLUG) {title uri}} */
import VKontakteWidget from "@/components/Vk";
import Hosting from "@/components/Ads";

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
    throw new Error("Failed to fetch the post");
  }
}

export default async function Biography() {
  const page = await getPage();
  return (
    <>
      <div className="mt-16 lg:flex lg:flex-row flex-col justify-between">
        <div className=" lg:ml-4">
          <div
            className="prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
        <div className="w-56 mx-auto lg:mx-0">
          <div className="w-52">
            <VKontakteWidget />
            <Hosting />
          </div>
        </div>
      </div>
    </>
  );
}
