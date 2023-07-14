// JS Proof Project submission

// array declared to store the NFTs as array elements
const NFTs = [];

// Creating a function to mint the NFTs 
// "NFT" is an Object  with metadata of a NFT
const mint_NFT = function ( _name, _haircolor, _topwear,_background) 
{
  const NFT = 
  {
    name: _name,
    haircolor: _haircolor,
    topwear: _topwear,
    background: _background,
  };
  // adding the minted NFT into the NFTs collection array
  NFTs.push(NFT);
  
  console.log(`the Nft have been minted succesfully : ${NFT.name}\n`);
};

// Creating a function to print all of our NFTs by looping through the array

const printNFTs = function () {
  console.log(`printing all the nfts`);

  for (let i = 0; i < NFTs.length; i++)
   {

    console.log(`\n s.no : ${i + 1}`);
    console.log(`name : ${NFTs[i].name}`);
    console.log(`haircolor : ${NFTs[i].haircolor}`);
    console.log(`topwear : ${NFTs[i].topwear}`);
    console.log(`background : ${NFTs[i].background}`);

  }

  console.log(`\nprinted  all the NFTs successfully!`);
};

// a function to print the total number of minted NFTs
const countNFTs = function ()
{
  console.log(`\nTotal no. of NFTs : ${NFTs.length}`);
};


//creating multiple NFTs using function 
mint_NFT(" kurinji", "brown", "coat", "mountains");
mint_NFT(" mullai", "red", "tees", "forests");
mint_NFT(" marutham", "green", "shirt", "plains");
mint_NFT(" neithal", "black", "hoodie", "beach");
mint_NFT(" palai", "blonde", "vest", "deserts");
mint_NFT(" pani", "violet", "sweater", "snow");

//func calllin
printNFTs();
countNFTs();
