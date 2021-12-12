import React from "react";

//We probably want to be able to dynamically generate title by passing a title into our menu component right as a props.So instead of doing something like MenuList = (props) => then <h1 className='title'> props.title</h1> props.title like this, we might also need some other properties to be passed in. If we look at our application, we're going to see that each one of these has a different. Image, right? So what we can do is we can actually structure the title off of our props for now and then we can just populate our component with that destruction value of title from our props. This is the exact same thing as writing props, that title, except we're pulling that title value off of our props and then setting it to this title value inside of our function so we can use it whenever we want.And then let's export out our menu item.And now we have our menu items.
const MenuItem = ({ title }) => {
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{titel}</h1>
      <span className="subtitle">SHOP</span>
    </div>
  </div>;
};

export default MenuItem;
