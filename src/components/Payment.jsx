import  { useState } from 'react';
import Web3 from 'web3';
import './Payment.css';

const Payment = () => {
  const [account, setAccount] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User denied account access:', error);
        alert('Please allow MetaMask access to proceed.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to continue.');
    }
  };

  const sendTransaction = async () => {
    if (!account) {
      alert('Please connect to MetaMask first.');
      return;
    }

    const web3 = new Web3(window.ethereum);
    const receiverAddress = '0x79d7be977cFb70bBfab965f0052Fe5045cc5cd69'; 

    const transactionParameters = {
      to: receiverAddress,
      from: account,
      value: web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
      gas: '21000',
    };

    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      setTransactionHash(txHash);
      alert('Transaction successful! Check console for transaction hash.');
      console.log('Transaction hash:', txHash);
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Check console for details.');
    }
  };

  return (
    <div className="payment-container">
      
      <button className="payment-button" onClick={connectMetaMask}>
        {account ? 'Connected' : 'Connect MetaMask'}
      </button>
      <button className="payment-button" onClick={sendTransaction} 
      >
        Pay with MetaMask
      </button>
      {transactionHash && (
        <div className="transaction-hash">
          <p>Transaction Hash: {transactionHash}</p>
          <a
            href={`https://ropsten.etherscan.io/tx/${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Etherscan
          </a>
        </div>
      )}
    </div>
  );
};

export default Payment;
 