import { useEffect, useState } from "react";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";
import useAxios from "../useAxios";

const CategoryList = ({ filterItems, children }) => {

  const [categories, , loading] =  useAxios({
    url: '/FoodCategory/categories'
  });

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }

    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => filterItems(category.id)}
            >
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
