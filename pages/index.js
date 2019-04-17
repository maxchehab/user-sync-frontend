import React from "react";
import fetch from "isomorphic-unfetch";
import App from "../components/App";
import "../base.css";
const Index = props => <App users={props.users} />;

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://usersync-max.herokuapp.com//users?apikey=8ae4daec-59cd-408d-932a-8ae38f909d3e"
  );
  const data = await res.json();

  return {
    users: data
  };
};

export default Index;
