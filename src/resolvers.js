
const resolvers = {
  Query: {
      listBestSeller: async (parent, args, {dataSources}) => {
          console.log('in the query-listBestSeller resolver');
          const list =  await dataSources.nyDataSource.fetchList();
          console.log(list.results);

          return list.results;
      }
  }
};

export default resolvers;




