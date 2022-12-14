import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  
} from './menu-item.styles';
const CollectionsMenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (


  <MenuItemContainer
    size={size}
    onClick={() => {
   
      history.push("./light_pale_white")
    }}
  >
    {console.log( history)}
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(CollectionsMenuItem);
