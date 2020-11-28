import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingCollectionStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionFetch,
  isCollectionLoaded
} from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchingCollectionStartAsync } = this.props;
    fetchingCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryID`}
          render={props => (
            <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchingCollectionStartAsync: () => dispatch(fetchingCollectionStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetch,
  isCollectionLoaded: isCollectionLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
