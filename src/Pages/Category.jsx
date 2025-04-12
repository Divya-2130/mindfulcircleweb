
import React, { useContext } from "react";
import './css/Category.css';
import { AppContext } from "../Context/Context";
import Items from "../Components/Items/Items";

const Category = (props) => {
  const { Yogo } = useContext(AppContext);

  return (
    
    <div className="category-page">
      {Yogo.map((item, i) => {
        if (props.category === item.category) {
          return (
            <Items
              key={i}
              id={item.id}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Category;