import { gql, GraphQLClient } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const client = new GraphQLClient(graphqlApi);

export const getSlugs = async () => {
  const query = gql`
    query PostSlugs {
      posts {
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { posts } = result;

  return posts;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
        id
        createdAt
        category {
          name
          slug
        }
        title
        excerpt
        image {
          url
        }
        author {
          name
          bio
        }
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { posts } = result;

  return posts;
};

export const getPost = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        id
        createdAt
        updatedAt
        category {
          name
          slug
        }
        title
        excerpt
        content {
          raw
        }
        image {
          url
        }
        author {
          name
          bio
          image {
            url
          }
        }
        slug
      }
    }
  `;

  const result = await client.request(query, { slug });
  const { post } = result;

  return post;
};

export const getFeaturedPost = async () => {
  const query = gql`
    query FeaturedPost {
      post(where: { slug: "my-fitness-story" }) {
        id
        createdAt
        category {
          name
          slug
        }
        title
        excerpt
        image {
          url
        }
        author {
          name
          bio
        }
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { post } = result;

  return post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query RecentPosts {
      posts(orderBy: createdAt_DESC, last: 3) {
        id
        title
        createdAt
        featuredImage {
          url
        }
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { posts } = result;

  return posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query SimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        id
        title
        createdAt
        featuredImage {
          url
        }
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { posts } = result;

  return posts;
};

export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await client.request(query);
  const { categories } = result;

  return categories;
};
