import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ofyyw2042001z42nxbhlf5/master",
    cache: new InMemoryCache()
})