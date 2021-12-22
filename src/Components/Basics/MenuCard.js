import React from 'react'

const MenuCard = ({menuData}) => {
    return (
    <section className="main-card--container">
    {menuData.map((curElem) => {

        const { id, name, price, stock, createDate, image } = curElem;

        return (
        <>
        <div className="card-container" key = {id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-name"><h2>{name}</h2></span>
                    <span className="card-price">Price = Rs. {price}</span>
                    <span className="card-stock">Stock = {stock}</span>
                    <span className="card-date">Uploaded on {createDate}</span>
                </div>    
                <div> 
                    <img src = {image} alt = "images" className='card-media'/>
                    </div>
                <div>
                    {
                        stock === 0?
                        (
                            <button disabled={true} className="card-add">ADD TO CART</button>
                        ):(
                            <button className="card-add">ADD TO CART</button>
                        )
                    }
                </div>
                       


            </div>   
        </div>
        </>
        )
    }
    )
    }
</section>
    )
}

export default MenuCard;
