import Head from 'next/head'
import { blogPosts } from '../../data';

export default function BlogPage({title,date,content}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          {title}
        </h1>
      </main>

    </div>
  )
}

export async function getStaticProps(context) {
    console.log(context);
    const { params } = context;
    return {
        props: blogPosts.find(item => item.slug === params.slug),
    };
};

export async function getStaticPaths() {
    return {
        paths: blogPosts.map((post) => ({
          params: {
            slug: post.slug,
          },
    })),
    fallback: false,
  };
}