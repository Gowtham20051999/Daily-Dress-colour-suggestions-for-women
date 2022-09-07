import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectColorSections } from '../../redux/color/color.selectors';

import PaleWhiteMenuItem from '../menu-item/menu-palewhite.component'

import { DirectoryMenuContainer } from './light-pale-white.style';

const CombinationOfPaleWhite = ({ sections }) => (

  <>
  <center><h1>You Can Wear Under The Color Combination</h1></center>
    <br></br>
  <DirectoryMenuContainer>
    
    {sections.map(({ id, ...otherSectionProps }) => (
      
      <PaleWhiteMenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
  </>
  
);

const mapStateToProps = createStructuredSelector({
  sections: selectColorSections
});

export default connect(mapStateToProps)(CombinationOfPaleWhite);
