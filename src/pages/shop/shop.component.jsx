import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { UpdateShopData } from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { UpdateShopData } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshop => {
      console.log(snapshop);

      const collectionMap = convertCollectionsToMap(snapshop);
      UpdateShopData(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryID`}
          render={props => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  UpdateShopData: collectionMap => dispatch(UpdateShopData(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
