import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";

import { Route } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshop => {
      console.log(snapshop);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:categoryID`}
          component={Collection}
        />
      </div>
    );
  }
}
export default ShopPage;
