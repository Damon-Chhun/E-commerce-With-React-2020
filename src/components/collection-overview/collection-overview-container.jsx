import { connect } from "react-redux";
import { compose } from "redux";
import { selectCollectionFetch } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

import withSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetch
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
