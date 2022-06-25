import { useEffect, useState } from "react";
export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 延迟函数编写
// const debounce = (func,delay) =>{
//   let timeout;
//   return (...param)=>{
//     if(timeout){
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func(...param);
//     },delay)
//   }
// }
//
// const log = debounce((param)=> console.log('call',param),5000);
//
// log({name:"1"});
// log({name:"1"});
// log({name:"1"});

export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在Value变化之后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 1.每次在上一个useEffect处理完成之后运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
