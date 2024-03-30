import SingleBlog from '@/components/Blog/SingleBlog';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { getAllPostsNewsWithSlug } from '@/components/Api';

const posts = await getAllPostsNewsWithSlug();

const Blog = () => {
  const link = 'news';
  return (
    <>
      <Breadcrumb pageName="Новости" description="Анонсы предстоящих мероприятий, связанных с творчеством В.С.&nbsp;Высоцкого, произведения, посвященные ему. Страница, где поклонники и знатоки творчества могут найти интересные материалы." />
      <section className="pt-[20px] pb-[20px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog: any) => (
              <div key={blog.slug} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} link={link} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
/*
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllPostsNewsWithSlug();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function getStaticProps() {
  const data = await fetchApiPOST('your_query_here');
  
  return {
    props: {
      data
    }
  };
}
*/
export default Blog;
