import React from "react";
import Counter from "./components/Beginner Level/Counter";
import ToggleButton from "./components/Beginner Level/ToggleButton";
import Show_Hide_Password from "./components/Beginner Level/Show_Hide_Password";
import Search from "./components/Beginner Level/Search";
import Todo from "./components/Beginner Level/Todo";

const App = () => {
  return (
    <div>
      <Counter />
      <ToggleButton />
      <Show_Hide_Password />
      <Search />
      <Todo />
    </div>
  );
};

export default App;
