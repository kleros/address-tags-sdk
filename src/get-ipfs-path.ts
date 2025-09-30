import { gql, GraphQLClient } from "graphql-request";
import { GetAddressInfoQuery } from "./generated/graphqlQueries";

const MAINNET_SUBGRAPH_CLIENT = new GraphQLClient(
  "https://indexer.hyperindex.xyz/1a2f51c/v1/graphql"
);
const MAINNET_REGISTRY_ADDRESS = "0x6e31d83b0c696f7d57241d3dffd0f2b628d14c67";
const GNOSIS_SUBGRAPH_CLIENT = new GraphQLClient(
  "https://indexer.hyperindex.xyz/1a2f51c/v1/graphql"
);
const GNOSIS_REGISTRY_ADDRESS = "0x76944a2678a0954a610096ee78e8ceb8d46d5922";

const QUERY = gql`
  query getAddressInfo($address: String!, $registryAddress: String!) {
    litems: LItem(
      where: {
        registry_id: { _eq: $registryAddress }
        status: { _eq: Registered }
        keywords: { _ilike: $address }
      }
    ) {
      data
    }
  }
`;

export const getIPFSPath = async (address: string): Promise<string> => {
  const ethereumSubgraphResult = await MAINNET_SUBGRAPH_CLIENT.request(QUERY, {
    address: `%${address}%`,
    registryAddress: MAINNET_REGISTRY_ADDRESS,
  }).then((result) => result as GetAddressInfoQuery);
  if (ethereumSubgraphResult.litems.length === 0) {
    const gnosisSubgraphResult = await GNOSIS_SUBGRAPH_CLIENT.request(QUERY, {
      address,
      registryAddress: GNOSIS_REGISTRY_ADDRESS,
    }).then((result) => result as GetAddressInfoQuery);
    if (gnosisSubgraphResult.litems.length === 0) throw "Item not found.";
    return gnosisSubgraphResult.litems[0].data;
  } else return ethereumSubgraphResult.litems[0].data;
};
