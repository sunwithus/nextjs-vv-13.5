import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { getAllPostsFilmsWithSlug } from "@/components/Api";

const posts = await getAllPostsFilmsWithSlug();

const Blog = () => {
  const link = "films";
  return (
    <>
      <Breadcrumb
        pageName="Фильмография"
        description='Владимир Высоцкий снялся в более чем двадцати пяти фильмах за свою карьеру в кинематографе. Его дебют состоялся в 1958 году, когда он сыграл эпизодическую роль студента  в фильме "Сверстницы" во время обучения в Школе-студии МХАТ. Но ирокую известность получил благодаря своему участию в фильме "Вертикаль". Песни из "Вертикали" стали своеобразным альпинистским фольклором...'
      />

      <section className="pt-[20px] pb-[20px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog: any) => (
              <div
                key={blog.slug}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} link={link} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
