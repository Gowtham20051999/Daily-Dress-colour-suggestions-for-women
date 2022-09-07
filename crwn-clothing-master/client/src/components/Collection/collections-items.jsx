import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsSections } from '../../redux/collections/collection.selectors';

import CollectionsMenuItem from '../menu-item/menu-item-collections'

import { DirectoryMenuContainer } from './collections_items.styles';

const CollectionItem = ({ sections }) => (

  <>
  {console.log(sections)}
  <center><h1>Choose Your Dress</h1></center>
    <br></br>
  <DirectoryMenuContainer>
    
    {sections.map(({ id, ...otherSectionProps }) => (
      
      <CollectionsMenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
  </>
  
);

const mapStateToProps = createStructuredSelector({
  sections: selectCollectionsSections
});

export default connect(mapStateToProps)(CollectionItem);
