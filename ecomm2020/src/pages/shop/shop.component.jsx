import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../Category/category.component";

import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:categoryID`} component={Category} />
  </div>
);

export default ShopPage;
