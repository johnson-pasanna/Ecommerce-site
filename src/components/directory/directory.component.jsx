import React from "react";

// this one needs to be a class compenet And this one will need to be a class component because we do need to store the state value of those menu items that we want to pass and create our menu items with. Right.So just like when we did our monster's Rolodex and we had that card list component, this one is going to have a directory with a state value of those menu items.
// const DirectoryList = () => (

// )

// export default DirectoryList;

class Directory extends React.Component {
    constructor() //we always need the constructor
    super() //inside of our constructor we always need the super so that we pull in all things that we need from  our react component in to our class

    this.state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ];
          
    }
    // then we are going to set the stat values because we are populating te menu items its kinda like the section right so I will call it as sections thats going to be a array value which is going to be in the different file it just an array of objects which has the title and the Image URL image 


    render() {
        return(
            <div className="directory-menu">
        )
    }
}






