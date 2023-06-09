import type { FC } from 'react';
import BaseInput from '@/components/ui/BaseInput';
import Container from '@/components/ui/Container';
import Frame from '@/components/ui/Frame';
import Hero from '@/components/Hero';
import BlogItem from '@/app/blog/BlogItem';
import BlogFilter from '@/app/blog/BlogFilter';
import BlogCategoryList from '@/app/blog/BlogCategoryList';
import BlogPostList from '@/app/blog/BlogPostList';
import BlogTagList from '@/app/blog/BlogTagList';
import HeroImage from '@/public/hero.webp';
import { db } from '@/lib/db';

export const metadata = {
  title: 'Hello bro',
  description: 'Generated by create next app',
};

interface Props {
  searchParams?: {
    search?: string;
    category?: string;
    tags?: string[];
  };
}

const Home: FC<Props> = async ({ searchParams }) => {
  const posts = await db.post.findMany({
    include: {
      author: true,
      _count: {
        select: { comments: true, likes: true },
      },
    },
  });

  return (
    <main>
      <Hero image={HeroImage}>
        <h1 className="mb-4 font-display text-5xl leading-none text-white md:text-6xl lg:text-6.5xl">
          Vivencias en la selvita
        </h1>
        <p className="text-sm text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          enim orci, mollis ac nulla eget, vulputate dignissim libero.
        </p>
      </Hero>

      <Container>
        <div className="pb-8 md:hidden">
          <BlogFilter />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(26.5rem,_1fr)_20rem]">
          <div>
            {posts.map((post) => (
              <BlogItem key={post.id} post={post} className="pb-10 lg:pb-16" />
            ))}
          </div>

          <div>
            <Frame className="mb-8 bg-gray-50">
              <BaseInput
                type="search"
                name="search"
                hasIcon
                hideLabel
                label="Buscar entradas"
                placeholder="Buscar..."
                defaultValue=""
                className="w-full"
              />
            </Frame>

            <Frame title="Categorias" className="mb-8 bg-gray-50">
              <BlogCategoryList limit={8} />
            </Frame>

            <Frame title="Articulos Recientes" className="mb-8 bg-gray-50">
              <BlogPostList show="recent" limit={3} />
            </Frame>

            <Frame title="Tags" className="mb-8 bg-gray-50">
              <BlogTagList limit={8} />
            </Frame>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
