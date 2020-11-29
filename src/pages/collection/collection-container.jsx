import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../../components/with-spinner/with-spinner.component";
import { isCollectionLoaded } from "../../redux/shop/shop.selectors";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !isCollectionLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection);

export default CollectionContainer;
