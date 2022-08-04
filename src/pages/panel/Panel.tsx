import React from "react";
import { ApolloSandbox } from "@apollo/sandbox/react";
import "@pages/panel/Panel.css";

const Panel: React.FC = () => {
  return <ApolloSandbox className="panel" includeCookies={false} />;
};

export default Panel;
