const INITIAL_STATE = {
    sections: [
      {
        title: 'T-shirt',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1WaykD3mTBuNjy1Xbq6yMrVXaC/Womail-kad-nlar-bayanlar-k-sa-k-sa-kollu-T-Shirt-yuvarlak-boyun-Casual-Tops-g.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'Pant',
        imageUrl: 'https://m.media-amazon.com/images/I/51fLxAGe0ZS._UX569_.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'skirt',
        imageUrl: 'https://www.wholesaledancedress.com/image/cache/catalog/item-img/tulle-ballet-tutu-skirts-for-child-wrap-chiffon-dance-aprons-for-children-girls-ballet-skirt-latin-skating-dance-for-kids-w01277-600x600.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'gown',
        imageUrl: 'https://ae01.alicdn.com/kf/H45ef358c66d54aaf9a3a71fccf1bd1efD/Pink-Quinceanera-Dresses-Ball-Gown-High-Neck-Crystals-Beaded-Butterfly-Sixteen-15-Sweet-16-Dress-Vestidos.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'strapless dress',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/1/VF/LV/LD/93721413/party-gown-dress-500x500.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'ball gown',
        imageUrl: 'https://img.veaul.com/product/d9e3f27da1c4d5378dda9b31920c64d5/luxury-gorgeous-red-bridal-wedding-dresses-2020-ball-gown-see-through-scoop-neck-long-sleeve-backless-heart-shaped-flower-appliques-lace-chapel-train-ruffle-560x560.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'cocktail ',
        imageUrl: 'https://cdn.shopify.com/s/files/1/2334/9687/products/JVN04718-FUCHSIA-1_600x.jpg?v=1628022486',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'saree ',
        imageUrl: 'https://5.imimg.com/data5/YD/II/MY-45174797/wedding-silk-saree-6050-500x500.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'maxi dress ',
        imageUrl: 'https://ae01.alicdn.com/kf/Hecffe26cbcdc46b5aee2c9ec4d182edeg/2021One-Shoulder-With-Bow-Pleated-Wedding-Dresses-Beading-Applique-Lace-Sweep-Train-White-Tulle-Bridal-Gowns.jpg_Q90.jpg_.webp',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'half saree ',
        imageUrl: 'https://i.pinimg.com/originals/01/fd/f7/01fdf748b7933e40e254d44cc2dd621e.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'leghana ',
        imageUrl: 'https://www.99sarees.com/images/Products/original/SB76_Vol4_AD609.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'jumper ',
        imageUrl: 'https://m.media-amazon.com/images/I/615oW1Hj2YL._UL1441_.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'chudidar ',
        imageUrl: 'https://i.pinimg.com/originals/ca/ff/c5/caffc56f4fc8296262f2904ede131561.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'party wear chudidar ',
        imageUrl: 'https://www.shahifits.in/wp-content/uploads/2022/02/Party-Wear-Latest-Anarkali-Designs-2022.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'jeans ',
        imageUrl: 'https://cdn.cliqueinc.com/posts/284651/best-straight-jeans-284651-1577716836149-image.gif',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default collectionsReducer;
  