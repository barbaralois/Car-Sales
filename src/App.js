import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './actions/additionalFeaturesActions';
import { removeFeature } from './actions/addedFeatureActions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const removeFeature = (item) => {
    console.log('remove', item);
    props.removeFeature(item);
  };

  const addFeature = (item) => {
    console.log('add', item);
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={addFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
