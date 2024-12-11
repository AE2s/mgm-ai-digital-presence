module.exports = {
    computeData: (data) => {
        if (typeof data !== 'object' || data === null || typeof data.productId != undefined) {
            throw new Error('Parameter is not valid');
          }
        
          return 'data'
    },
};