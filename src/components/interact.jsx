// require("dotenv").config();
// const contractABI = require("./contract-abi.json");
// const MarketABI = require("./market-abi.json");
// const NFTABI = require("./nft-abi.json");
// const contractAddress = "0x92d474d216ce429c1efc7f48d7ff66bae5d070cd";
// const Market_Addr = "0x5DeDf79Fba6F8313E72b06d5C479d478268BAb04";
// const NFT_Addr = "0xCE7131e54F27c6E87c21757C5eb62FA5A1048bfB";

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Metamask successfuly connected.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "Something went wrong: " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Please check information and mint.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Something went wrong: " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

// export const getPriceById = async (_id) => {
//   const tmp_id = parseInt(_id);
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .getPriceById(tmp_id)
//       .encodeABI(),
//   };

//   try {
//     var price = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     price = parseInt(price) / 10**18;
//     return price;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const check_minted = async (_id) => {
//   const tmp_id = parseInt(_id);
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .check_minted(tmp_id)
//       .encodeABI(),
//   };

//   try {
//     var _minted = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return _minted;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const check_listedAll = async (_id) => {
//   const tmp_id = parseInt(_id);
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .idToMarketItem(tmp_id)
//       .encodeABI(),
//   };

//   try {
//     var _item = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return _item;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const owner = async () => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .owner()
//       .encodeABI(),
//   };

//   try {
//     var owneraddr = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return owneraddr;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const ownerOf = async (_id) => {
//   const tmp_id = parseInt(_id);
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .ownerOf(tmp_id)
//       .encodeABI(),
//   };

//   try {
//     var _owner = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return _owner;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const balanceOf = async (addr) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .balanceOf(addr)
//       .encodeABI(),
//   };

//   try {
//     var cnt = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return cnt;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const fetchMyNFTs = async (addr) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .fetchMyNFTs(addr)
//       .encodeABI(),
//   };

//   try {
//     var my_nfts = await window.ethereum.request({
//       method: "eth_call",
//       params: [transactionParameters],
//     });
//     return my_nfts;
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// }

// export const mintMarketItem = async (id, price) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);
//   const hex_price = web3.utils.toHex(web3.utils.toWei(price.toString(), 'ether'))

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     value: hex_price, // Only required to send ether to the recipient from the initiating external account.
//     data: window.market.methods
//       .mintMarketItem(id)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };

// export const mintMarketItemToList = async (id, price, new_price) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);
//   var hex_price = web3.utils.toHex(web3.utils.toWei(price.toString(), 'ether'))
//   var hex_newprice = web3.utils.toHex(web3.utils.toWei(new_price.toString(), 'ether'))

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     value: hex_price, // Only required to send ether to the recipient from the initiating external account.
//     data: window.market.methods
//       .mintMarketItemToList(id, hex_newprice)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };

// export const claim = async (addr) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .claim(addr)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };

// export const Init = async () => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .initNFTLevels()
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };


// export const dropNFTById = async (_id) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .dropNFTById(parseInt(_id))
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };


// export const purchaseItem = async (id, price) => {
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);
//   const hex_price = web3.utils.toHex(web3.utils.toWei(price.toString(), 'ether'))

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     value: hex_price, // Only required to send ether to the recipient from the initiating external account.
//     data: window.market.methods
//       .purchaseItem(parseInt(id))
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };


// export const updatePriceById = async (id, price) => {
//   var tmpId = parseInt(id);
//   window.market = await new web3.eth.Contract(MarketABI, Market_Addr);
//   const hex_price = web3.utils.toHex(web3.utils.toWei(price.toString(), 'ether'))

//   const transactionParameters = {
//     to: Market_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.market.methods
//       .updatePriceById(tmpId, hex_price)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };

// export const setApprovalForAll = async () => {
//   window.nft = await new web3.eth.Contract(NFTABI, NFT_Addr);

//   const transactionParameters = {
//     to: NFT_Addr, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.nft.methods
//       .setApprovalForAll(Market_Addr, true)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "Check out your transaction on Etherscan: ",
//       tx: "https://testnet.bscscan.com/tx/" + txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "Something went wrong: " + error.message,
//     };
//   }
// };