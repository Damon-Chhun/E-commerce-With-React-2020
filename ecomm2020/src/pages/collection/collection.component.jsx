import React from "react";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

//import CollectionItem from "../../components/collection-item";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryID)(state)
});

export default connect(mapStateToProps)(Collection);
