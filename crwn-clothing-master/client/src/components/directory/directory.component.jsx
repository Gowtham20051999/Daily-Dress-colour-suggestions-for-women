import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (

  <>
  {console.log(sections)}
  <center><h1>Select your Skin Tone</h1></center>
    <br></br>
  <DirectoryMenuContainer>
    
    {sections.map(({ id, ...otherSectionProps }) => (
      
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
  </>
  
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
