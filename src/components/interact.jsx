import AppContract from "../abi/BSG.json";
import USDTContract from "../abi/USDT.json";
import web3 from "../ethereum/web3";
import { ethers } from 'ethers';

import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../config";

const parseUserInfo = (hexdata) => {
  let data = {};
  data.referrer = "0x" + hexdata.substring(26, 66);
  data.start = parseInt(hexdata.substring(67, 130), 16);
  data.level = parseInt(hexdata.substring(131, 194), 16);
  data.maxDeposit = parseInt(hexdata.substring(195, 258), 16);
  data.totalDeposit = parseInt(hexdata.substring(259, 322), 16);
  data.teamNum = parseInt(hexdata.substring(323, 386), 16);
  data.teamTotalDeposit = parseInt(hexdata.substring(387, 450), 16);
  data.teamTotalVolume = parseInt(hexdata.substring(451, 514), 16);
  data.totalFreezed = parseInt(hexdata.substring(515, 578), 16);
  data.totalRevenue = parseInt(hexdata.substring(579, 642), 16);
  data.membership = parseInt(hexdata.substring(643, 706), 16);
  data.directBonusCount = parseInt(hexdata.substring(707, 770), 16);
  return data;
}

const parseRewardInfo = (hexdata) => {
  let data = {};
  data.capitals = parseInt(hexdata.substring(2, 66), 16);
  data.statics = parseInt(hexdata.substring(67, 130), 16);
  data.directs = parseInt(hexdata.substring(131, 194), 16);
  data.levelReleased = parseInt(hexdata.substring(195, 258), 16);
  data.infinityBonusReleased = parseInt(hexdata.substring(259, 322), 16);
  data.cycleNumber = parseInt(hexdata.substring(323, 386), 16);
  data.more1k = parseInt(hexdata.substring(387, 450), 16);
  data.split = parseInt(hexdata.substring(451, 514), 16);
  data.splitDebt = parseInt(hexdata.substring(515, 578), 16);
  return data;
}

const parseOrderInfo = (hexdata) => {
  let data = {};
  data.cycle = parseInt(hexdata.substring(2, 66), 16);
  data.amount = parseInt(hexdata.substring(67, 130), 16);
  data.start = parseInt(hexdata.substring(131, 194), 16);
  data.unfreeze = parseInt(hexdata.substring(195, 258), 16);
  data.isClaimed = (parseInt(hexdata.substring(259, 322), 16) != 0);
  return data;
}

const parseAddress = (hexdata) => {
  return "0x" + hexdata.substring(26, 66);
}

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

// writable functions
export const _register = async (referral) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .register(referral)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

export const _deposit = async (amount) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .deposit(amount)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

export const _withdraw = async () => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .withdraw()
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

export const _approve = async (amount) => {
  window.usdt = await new web3.eth.Contract(USDTContract.abi, CONTRACT_ADDRESS_USDT);

  const transactionParameters = {
    to: CONTRACT_ADDRESS_USDT, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.usdt.methods
      .approve(CONTRACT_ADDRESS, parseInt(amount))
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

export const _depositBySplit = async (amount) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .depositBySplit(amount)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

export const _transferBySplit = async (_user, amount) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .transferBySplit(_user, amount)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
};

//read functions

export const getRegistered = async () => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const accounts = await provider.send("eth_requestAccounts", []);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      ._checkRegistered(accounts[0])
      .encodeABI(),
  };

  try {
    var isRegistered = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    if (isRegistered.length <= 2)
      return false;
    isRegistered = parseInt(isRegistered, 16) != 0;
    return isRegistered;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getUSDTBalance = async () => {
  window.usdt = await new web3.eth.Contract(USDTContract.abi, CONTRACT_ADDRESS_USDT);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const accounts = await provider.send("eth_requestAccounts", []);

  const transactionParameters = {
    to: CONTRACT_ADDRESS_USDT, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.usdt.methods
      .balanceOf(accounts[0])
      .encodeABI(),
  };

  try {
    var isRegistered = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    isRegistered = parseInt(isRegistered) / 1e6;
    return isRegistered;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export const handleWalletBalance = async () => {
  const { ethereum } = window;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0])
    let bal = ethers.utils.formatEther(balance)
    return bal
  }
  return 0;
}

export const getReferral = async () => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const accounts = await provider.send("eth_requestAccounts", []);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .userInfo(accounts[0])
      .encodeABI(),
  };

  try {
    var _userinfo = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    let parsed = parseUserInfo(_userinfo);
    return parsed.referrer;
  } catch (error) {
    console.log(error)
    return "";
  }
}


export const getAllowance = async () => {
  window.usdt = await new web3.eth.Contract(USDTContract.abi, CONTRACT_ADDRESS_USDT);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const accounts = await provider.send("eth_requestAccounts", []);

  const transactionParameters = {
    to: CONTRACT_ADDRESS_USDT, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.usdt.methods
      .allowance(accounts[0], CONTRACT_ADDRESS)
      .encodeABI(),
  };

  try {
    var _allowance = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    _allowance = parseInt(_allowance);
    return _allowance;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export const getClaimable = async (_user) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      ._checkClaimable(_user)
      .encodeABI(),
  };

  try {
    var isRegistered = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    isRegistered = parseInt(isRegistered) != 0;
    return isRegistered;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getLastDeposit = async (_user) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .userInfo(_user)
      .encodeABI(),
  };

  try {
    var userinfo = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    let finalDeposit = parseUserInfo(userinfo);
    return finalDeposit?.maxDeposit / 1e6 || 0;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getRewardInfo = async (_user) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .rewardInfo(_user)
      .encodeABI(),
  };

  try {
    var rewardinfo = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    return parseRewardInfo(rewardinfo);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getUserInfo = async (_user) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .userInfo(_user)
      .encodeABI(),
  };

  try {
    var rewardinfo = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    return parseUserInfo(rewardinfo);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getCurDay = async () => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .getCurDay()
      .encodeABI(),
  };

  try {
    var curday = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    return parseInt(curday, 16);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getMyTeams = async (_user) => {
  try {
    window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

    let transactionParameters = {
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.staking.methods
        .getMyTeamNumbers(_user)
        .encodeABI(),
    };

    let teamlength = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    teamlength = parseInt(teamlength, 16);
    console.log('teamlength', teamlength)
    let teamlist = [];

    for (let index = 0; index < teamlength; index++) {
      transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.staking.methods
          .myTeamUsers(_user, index)
          .encodeABI(),
      };
      let teamaddress = await window.ethereum.request({
        method: "eth_call",
        params: [transactionParameters],
      });
      teamaddress = parseAddress(teamaddress);
      console.log('teamaddress', teamaddress)
      transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.staking.methods
          .userInfo(teamaddress)
          .encodeABI(),
      };
      let _userinformation = await window.ethereum.request({
        method: "eth_call",
        params: [transactionParameters],
      });
      let _tmpdata = parseUserInfo(_userinformation);
      _tmpdata.address = teamaddress;
      teamlist.push(_tmpdata);
    }
    return teamlist;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getOrders = async (_user) => {
  try {
    window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

    let transactionParameters = {
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.staking.methods
        .getOrderLength(_user)
        .encodeABI(),
    };

    let orderlength = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    orderlength = parseInt(orderlength, 16);
    console.log('orderlength', orderlength)
    let orders = [];
    for (let index = 0; index < orderlength; index++) {
      transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.staking.methods
          .orderInfos(_user, index)
          .encodeABI(),
      };
      let _order = await window.ethereum.request({
        method: "eth_call",
        params: [transactionParameters],
      });
      orders.push(parseOrderInfo(_order));
    }
    return orders;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getSplit = async (_user) => {
  window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

  const transactionParameters = {
    to: CONTRACT_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.staking.methods
      .rewardInfo(_user)
      .encodeABI(),
  };

  try {
    var rewardinfo = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    return parseRewardInfo(rewardinfo).split;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getFinalOrder = async (_user) => {
  try {
    window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

    let transactionParameters = {
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.staking.methods
        .getOrderLength(_user)
        .encodeABI(),
    };

    let orderlength = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    orderlength = parseInt(orderlength, 16);
    if (orderlength == 0)
      return null
    console.log('orderlength', orderlength)
    transactionParameters = {
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.staking.methods
        .orderInfos(_user, orderlength - 1)
        .encodeABI(),
    };
    let _order = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    _order = parseOrderInfo(_order);
    return _order;
  } catch (error) {
    console.log(error)
    return null;
  }
}


export const getDepositors = async () => {
  try {
    window.staking = await new web3.eth.Contract(AppContract.abi, CONTRACT_ADDRESS);

    let transactionParameters = {
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.staking.methods
        .getDepositorsLength()
        .encodeABI(),
    };

    let depositorslength = await window.ethereum.request({
      method: "eth_call",
      params: [transactionParameters],
    });
    depositorslength = parseInt(depositorslength, 16);
    console.log('depositors length', depositorslength)
    let Depositors = [];
    for (let index = 0; index < depositorslength; index++) {
      transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.staking.methods
          .depositors(index)
          .encodeABI(),
      };
      let _user = await window.ethereum.request({
        method: "eth_call",
        params: [transactionParameters],
      });
      Depositors.push(parseAddress(_user));
    }
    return Depositors;
  } catch (error) {
    console.log(error)
    return [];
  }
}