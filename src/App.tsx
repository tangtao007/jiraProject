import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
import { TsReactTest } from "./screens/try-use-arry";
import { LoginScreen } from "./screens/login";
function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/*<TsReactTest/>*/}
      {/*<ProjectListScreen />*/}
    </div>
  );
}

export default App;
