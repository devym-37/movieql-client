import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql.now.sh/" // graphQL API를 어떻게 찾는지에 대한
});

export default client;
