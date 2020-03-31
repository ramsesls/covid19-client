import { cancelationMessage } from 'config';

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => hasCanceled_ ? reject(cancelationMessage) : resolve(val));
    promise.catch(error => reject(error));
  });

  return (wrappedPromise.cancel = _ => (hasCanceled_ = true), wrappedPromise);
};

export default makeCancelable;
