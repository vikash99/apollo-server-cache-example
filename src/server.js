import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import NyDataSource from './ny-datasource';

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

const server = new ApolloServer({
	schema,
	playground: true,
    dataSources: () => {
	  return {
          nyDataSource: new NyDataSource(),
      }
    },
}).listen(8080).then(({ url }) => { console.log(`Server started at url ${url}`)});
