import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { articleFilePaths, ARTICLES_PATH } from '../../shared/utils/mdx-utils';

const ChakraLinkDynamic = dynamic(() =>
  // eslint-disable-next-line react/display-name
  import('@chakra-ui/react').then(({ Link }) => ({ children }, props) => (
    <Link colorScheme="purple" {...props}>
      {children}
    </Link>
  )),
);

const components = {
  a: ChakraLinkDynamic,
  h2: dynamic(() =>
    // eslint-disable-next-line react/display-name
    import('@chakra-ui/layout').then(({ Heading }) => ({ children }) => (
      <Heading as="h4">{children}</Heading>
    )),
  ),
  Head,
};

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: any }; //TODO get these props from Article interface
}

export default function ArticlePage({ source, frontMatter }: Props) {
  return (
    <>
      <header>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </header>
      <div>
        <h1>{frontMatter.title}</h1>
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
}

async function getArticleBySlug(slug: string) {
  const postFilePath = path.join(ARTICLES_PATH, `${slug}.mdx`); // TODO make sure params exist
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return { mdxSource, data };
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params!.slug as string;

  const { mdxSource, data } = await getArticleBySlug(slug);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Array<{ params: { slug: string } }> = articleFilePaths
    .map(function removeFileExtensionsForPagePaths(path: string): string {
      return path.replace(/\.mdx?$/, '');
    })
    .map(function mapPathToNextStaticPathsObject(slug: string) {
      return { params: { slug } };
    });

  return {
    paths,
    fallback: false,
  };
};
