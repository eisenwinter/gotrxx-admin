const factory = () => {
  return {
    static(arr) {
      return {
        type() {
          return "static";
        },
        query(input) {
          return new Promise((r) =>
            r(arr.filter((f) => f.toLowerCase().includes(input)))
          );
        },
      };
    },
    dyanmic(query){
        return {
            type() {
              return "dynamic";
            },
            query: query
          };
    },
    debounce(fx, delay, now) {
        let timeout;
        return () => {
          const later = () => {
            timeout = null;
            if (!now) {
                fx.apply(this, arguments);
            } 
          };
          const c = now && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (c){ 
            fx.apply(this, arguments);
          }
        };
      }
  };
};



export default factory