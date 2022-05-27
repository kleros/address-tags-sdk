import fetch from "cross-fetch";

export interface IAddressInformation {
  publicNameTag: string;
  contractAddress: string;
  uiWebsiteLink: string;
  publicNote: string;
}

export const getInfoFromIPFS = async (
  ipfsPath: string,
  ipfsGateway: string
): Promise<IAddressInformation> => {
  const response = await fetch(ipfsGateway + ipfsPath);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return {
    publicNameTag: json.values["Public Name Tag"],
    contractAddress: json.values["Contract Address"],
    uiWebsiteLink: json.values["UI/Website Link"],
    publicNote: json.values["Public Note"],
  };
};
