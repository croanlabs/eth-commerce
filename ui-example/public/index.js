const ethCommerce = new EthCommerce();
ethCommerce.render(
  {
    targetElement: 'pay-button',
    type: 'PAY',
    amount: 500,
    currency: 'USD',
    address: '0x11A7Ca870700f284e4647E55DeD9040f0F86D4D4',
  },
  e => {
    console.log('error callback', e);
  },
  tx => {
    console.log('success callback', tx);
  },
);
