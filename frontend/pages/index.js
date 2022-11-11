import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries';
import Link from 'next/link';

export default function Home({ posts }) {
  console.log('posts :', posts);
  return (
    <div>
      <br />
      <h2>Jobs</h2>
      <br />
      {posts.map((val, i) => {
        return (
          <Link key={i} href={val.attributes.urlSlug}>
            <div className='card'>
              <h3>{val.attributes.title}</h3>
              <p>{val.attributes.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.blogPosts.data,
    },
  };
}
