import React from "react";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionContainer from "../collection/collection-container";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingCollectionStart } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchingCollectionStart } = this.props;
    fetchingCollectionStart();
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
  fetchingCollectionStart: () => dispatch(fetchingCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
