import { gql, GraphQLClient } from "graphql-request";
import { GetAddressInfoQuery } from "./generated/graphqlQueries";

const MAINNET_SUBGRAPH_CLIENT = new GraphQLClient(
  "https://api.thegraph.com/subgraphs/name/kleros/curate"
);
const MAINNET_REGISTRY_ADDRESS = "0x6e31d83b0c696f7d57241d3dffd0f2b628d14c67";
const GNOSIS_SUBGRAPH_CLIENT = new GraphQLClient(
  "https://api.thegraph.com/subgraphs/name/eccentricexit/curate-xdai-ii"
);
const GNOSIS_REGISTRY_ADDRESS = "0x76944a2678a0954a610096ee78e8ceb8d46d5922";

const QUERY = gql`
  query getAddressInfo($address: String!, $registryAddress: String!) {
    litems(
      where: {
        registry: $registryAddress
        status: Registered
        keywords_contains: $address
      }
    ) {
      keywords
      data
    }
  }
`;

export const getIPFSPath = async (address: string): Promise<string> => {
  const ethereumSubgraphResult = await MAINNET_SUBGRAPH_CLIENT.request(QUERY, {
    address,
    registryAddress: MAINNET_REGISTRY_ADDRESS,
  }).then((result) => result as GetAddressInfoQuery);
  if (ethereumSubgraphResult.litems === []) {
    const gnosisSubgraphResult = await GNOSIS_SUBGRAPH_CLIENT.request(QUERY, {
      address,
      registryAddress: GNOSIS_REGISTRY_ADDRESS,
    }).then((result) => result as GetAddressInfoQuery);
    if (gnosisSubgraphResult.litems === []) throw "Item not found.";
    return gnosisSubgraphResult.litems[0].data;
  } else return ethereumSubgraphResult.litems[0].data;
};
