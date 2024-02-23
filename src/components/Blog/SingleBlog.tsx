import Link from "next/link";

type Blog = {
  title: string;
  slug: string;
  content: string;
  /*tags: string[];*/
  date: string;
};

const SingleBlog = ({ blog, link }: { blog: Blog; link: string }) => {
  /*  image, paragraph, author, tags, publishDate } */
  const { title, content, slug } = blog;
  //console.log(link);
  //const formattedDate = date.toLocaleDateString();
  //const formattedDate = new Date(Date.parse(date)).toLocaleDateString();
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div className="p-2 sm:p-8 md:py-4 md:px-6 ">
          <Link href={`/${link}/${slug}`}>
            <h3 className=" h-32 block border-r overflow-hidden">
              <div className=" block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                {title}
              </div>
            </h3>
            <div
              className="[&>p>*]:h-full [&>p>*]:max-w-full [&>p>iframe]:hidden [&>*>img]:hidden text-ellipsis overflow-hidden h-48 mb-1 border-b border-body-color border-opacity-70 pb-1 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
              dangerouslySetInnerHTML={{
                __html: content.slice(0, 180) + `...`,
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
