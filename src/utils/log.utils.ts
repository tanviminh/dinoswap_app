import React from 'react';

function error(data: any) {
  console.log('==ERROR==');
  console.log(JSON.stringify(data, null, 2));
}

function log(data: any) {
  console.log('==LOG==');
  console.log(JSON.stringify(data, null, 2));
}

export {error, log};
