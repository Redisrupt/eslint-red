module.exports = () => {
  throw new Error('This module is just to agreggate npm modules. It is not intended to be required');
};

const b = args => {
  console.log('>>> args, b', args);
};

b();
