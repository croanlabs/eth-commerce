// FIXME Get username of the user to pass to the backend
const msg = '@username';
const address = web3.eth.accounts[0];
const handleSignature = (err, signed) => {
  if (!err) {
    const fetchOpts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, msg, signed })
    };
    fetch('/log-payment', fetchOpts).then(res => {
      if (res.status >= 200 && res.status <= 300) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    }).then(json => {
      // Auth succeeded
    }).catch(err => {
      // Auth failed
    })
  }
};
web3.personal.sign(web3.toHex(msg), address, handleSignature);

// Payment button
const ethCommerce = new EthCommerce();
ethCommerce.render(
  {
    targetElement: 'pay-button',
    type: 'PAY',
    amount: 0.01,
    currency: 'ETH',
    address: '0x11A7Ca870700f284e4647E55DeD9040f0F86D4D4',
  },
);
