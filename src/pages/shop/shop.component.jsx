import React from "react";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionContainer from "../collection/collection-container";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingCollectionStartAsync } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchingCollectionStartAsync } = this.props;
    fetchingCollectionStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:categoryID`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchingCollectionStartAsync: () => dispatch(fetchingCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
