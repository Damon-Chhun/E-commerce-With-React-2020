import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";

import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { UpdateShopData } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { UpdateShopData } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshop => {
      console.log(snapshop);

      const collectionMap = convertCollectionsToMap(snapshop);
      UpdateShopData(collectionMap);
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

const mapDispatchToProps = dispatch => ({
  UpdateShopData: collectionMap => dispatch(UpdateShopData(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
