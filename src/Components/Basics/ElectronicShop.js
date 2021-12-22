import React from 'react';
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from './Navbar';
import CheckOut from './CheckOut';

    const uniqueList = [
        ...new Set(
            Menu.map((curElem) => {
                return curElem.category;
            })
        ),
        "All",
    ];

    console.log(uniqueList);

    const ElectronicShop = () => {
        const [menuData, setmenuData] = React.useState(Menu);
        const [menuList, setmenuList] = React.useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All"){
            setmenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setmenuData(updatedList);
    }
    return <>

    <nav className='filterbar'>
        <div className='btn'>
            <span>Search by:     </span>
            <button className='btn-group_item'>Price</button>
            <button className='btn-group_item'>Date</button>
            <button className='btn-group_item'
            onClick={() => this.navbar}>Category</button>
        </div>
    </nav>
    <Navbar filterItem = {filterItem} menuList = {menuList}/>
    <MenuCard menuData = {menuData}/>
    <CheckOut></CheckOut>
    </>
}

export default ElectronicShop;
