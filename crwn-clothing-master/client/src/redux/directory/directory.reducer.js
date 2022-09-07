const INITIAL_STATE = {
  sections: [
    {
      title: 'light and Pale white',
      imageUrl: 'https://s1.r29static.com/bin/entry/25b/0,0,460,552/960xbm,70/1238479/image.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'white and fair',
      imageUrl: 'https://media.istockphoto.com/photos/smiling-asian-woman-with-fair-skin-hand-touching-her-face-picture-id1204923865?k=20&m=1204923865&s=612x612&w=0&h=9EZNRmNrmUWTEz0RvBCigqf0qHanFQJWKODWxxgz7Fw=',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'medium and white to olive',
      imageUrl: 'https://thumbs.dreamstime.com/z/girl-olive-skin-closeup-portrait-young-over-isolated-white-background-30820383.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'olive and maderate brown',
      imageUrl: 'https://hips.hearstapps.com/elleuk.cdnds.net/18/12/1521726217-zendaya.jpg?resize=480:*',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'brown and dark brown',
      imageUrl: 'https://i.pinimg.com/originals/a7/1d/2b/a71d2be981871b08b652168f4a8b17cc.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
      title: 'black and very dark brown to black',
      imageUrl: 'https://media.allure.com/photos/5b69f7fbf2fede0bb4257123/1:1/w_2000,h_2000,c_limit/duckie-dark-brown.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
