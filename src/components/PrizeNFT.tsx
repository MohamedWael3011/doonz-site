/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { NFT, ThirdwebNftMedia, useContract, useContractMetadata, useContractRead } from "@thirdweb-dev/react"
import { RAFFLE_ADDRESS } from "../consts/addresses"
import { Box, Card, Flex, Stack,Text,Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PrizeNFT() {

    const {contract:raffleContract} = useContract(RAFFLE_ADDRESS);
    const{data:prizeNFTContractAddress} = useContractRead(raffleContract,"nftAddress");
    const{data:nftTokenId} = useContractRead(raffleContract,"nftId");

    const{contract:NftContract} = useContract(prizeNFTContractAddress);

    const{data:prizeNftMetadata, isLoading:LoadingPrizeNft} = useContractMetadata(NftContract);

    // const{data:nft, isLoading:LoadingNft} = useNFT(NftContract,nftTokenId);
    // Define state for nft and loading state
    const [nft, setNft] = useState<NFT>(); // Initial state is null
    const [loadingNft, setLoadingNft] = useState(true); // Initial loading state is true

    useEffect(() => {
        // Define an async function to fetch NFT data
        async function fetchNft() {
            try {
                const nftData = await NftContract?.erc721.get(nftTokenId);
                if (nftData) {
                setNft(nftData);
            } else {
                // Handle case when nftData is undefined
                console.error('NFT data is undefined');
            }
            } catch (error) {
                console.error('Error fetching NFT:', error);
            } finally {
                setLoadingNft(false); // Set loading state to false after fetching
            }
        }

        if (NftContract && nftTokenId) {
            fetchNft();
        }
    }, [NftContract, nftTokenId]);



  return (
    <Card p={'15%'}>
        <Heading p={'2'} textAlign={"center"}>Prize NFT</Heading>
        {!LoadingPrizeNft  &&!loadingNft && (
            <Stack  textAlign={'center'}>
                <Flex justifyContent={"center"}>
                    <ThirdwebNftMedia metadata={nft?.metadata!} height="80%" width="80%"/>
                </Flex>
                <Box>

                    <Text fontSize="2xl" fontWeight={"bold"}>{prizeNftMetadata?.name}</Text>
                    <Text fontWeight={"bold"}>{nft?.metadata.name}</Text>

                </Box>
            </Stack>
        )}

    </Card>
  )
}
