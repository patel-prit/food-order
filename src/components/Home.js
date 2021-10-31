import React from "react";
import "./Home.css";
import { Menu } from "@material-ui/icons";
import { FilterList } from "@material-ui/icons";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import OrderList from "./OrderList";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <div className="home-left-content">
            <Menu />
            <h4>MENU</h4>
          </div>
        </div>
        <div className="home-middle">
          <div className="right-sided">
            <div className="filter">
              <FilterList fontSize="small" />
              <span>Filter</span>
            </div>
            <div className="sorted-type">
              Sorted by:
              <select name="sorted" id="">
                <option value="recommanded">Recommended</option>
              </select>
            </div>
          </div>
          <div className="all-menu">
            <MenuItem
              className="all-menu-grid"
              id="12321341"
              title="Cabage Salad"
              price={4.99}
              rating={4.2}
              quantity="250g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="12321541"
              title="Noodle Salad"
              price={6.3}
              rating={4.5}
              quantity="300g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="123781341"
              title="Vegetable Mix"
              price={5.99}
              rating={5.0}
              quantity="400g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="123213341"
              title="Seafood soup"
              price={6.1}
              rating={4.4}
              quantity="350g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="123421341"
              title="Bean Soup"
              price={4.4}
              rating={4.9}
              quantity="350g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="123291341"
              title="Stewed Vegetable"
              price={4.99}
              rating={3.9}
              quantity="400g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="12821341"
              title="Chicken Soup"
              price={3.99}
              rating={4.2}
              quantity="350g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <MenuItem
              className="all-menu-grid"
              id="12361341"
              title="Roast patatoes"
              price={4.99}
              rating={4.2}
              quantity="300g"
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="home-right">
          <OrderList />
          <Link to="/checkout">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
