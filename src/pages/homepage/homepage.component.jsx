import React from "react";
import { HomePageContainer } from "./homepage.styled";
import "./Homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="hompage">
    <Directory />
  </div>
);

export default HomePage;
