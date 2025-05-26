import React from 'react'
import ProductDetailes from './ProductDetailes'
import axios from "axios";
import { useEffect, useState } from "react";
import { DproductDetails } from '../../Data/Data';

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("img/product.json");
                setData(res.data.map(item => ({ ...item, count: 0 })));
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    const handleCountChange = (index, value) => {
        const updated = [...data];
        updated[index].count = Number(value);
        setData(updated);
    };
    return (
        <>
            {DproductDetails.map((e, i) => (
                <div className="card7 row container-fluid mx-auto my-5" key={i}>
                    {data.slice(0, 1).map((item, j) => {
                        return (
                            <>
                                <div className="col-lg-2 ps-4">
                                    <div className="card w-100 border-top-0 border-bottom-0">
                                        <div className="img-continar">
                                            <img className='w-100 h-100' src={item.img} alt={item.name} />
                                            <img
                                                src={item.overlay}
                                                className="overlay w-100 h-100"
                                                alt="overlay image"
                                            />
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <i className="fa-solid fa-heart"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h5 className="card-price d-inline">{item.price}</h5><span className='bg-danger rounded-circle p-1 text-light ms-2'>${item.offers || ""}</span>
                                    </div>

                                </div>
                                <div className="txt col-lg-9">
                                    <h1 />
                                    <h2 />
                                    <p>
                                        {e.paragraph3}
                                    </p>
                                    <p>
                                        <strong>Tags: {item.tag} </strong> <a href="#"> </a>
                                    </p>
                                    <p>
                                        <strong>SKU: {item.SKU}</strong> <a href="#" />
                                    </p>
                                    <p>
                                        <strong>Category: {item.category}</strong> <a href="#" />
                                    </p>
                                    <input
                                        type="number"
                                        placeholder="Count"
                                        min={0}
                                        value={item.count}
                                        onChange={(e) => handleCountChange(j, e.target.value)}
                                    />
                                    <div>Total: {item.count * Number(item.price.replace(/[^0-9.]/g, ''))}$</div>
                                    <h6>
                                        <i className="fa-regular fa-clock" /> Orders ship within 5 to 10 business
                                        days.
                                    </h6>
                                    <h6>
                                        <i className="fa-solid fa-truck-fast" /> Hoorey! This item ships free to
                                        the US.
                                    </h6>
                                </div>
                            </>

                        )
                    })}
                </div>
            ))}
            <ProductDetailes />
        </>
    )
}

export default Product
