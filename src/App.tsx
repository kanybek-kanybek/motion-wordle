import React from "react";
import "./App.css";
import Block from "./components/block";
import UseFetch from "./components/api/useFetch";

function App() {
    return (
        <>
            <Block />
            <UseFetch />
        </>
    );
}

export default App;
