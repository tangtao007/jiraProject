import React, { FormEvent } from "react";
import * as qs from "qs";
import { cleanObject } from "../../utils";

// 继承
// interface Base {
//     id:number;
// }
//
// interface Person extends Base{
//     name:string;
// }

// const p:Person = {name:"123",id:123}

interface Base {
  id: number;
}

interface Advance extends Base {
  name: string;
}

const test = (p: Base) => {};
// 鸭子类型（duck typing）：面向接口编程，而不是面向编程 （看起来像鸭子，你说它是鸭子 那就是鸭子）
// const a = {id:1,name:'jack'} // 不指定类型也不会报错
// const a:Advance = {id:1,name:'jack'} // 超出预期的类型也不会报错
// test(a)

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登陆</button>
    </form>
  );
};
