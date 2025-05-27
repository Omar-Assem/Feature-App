import React, { useEffect, useState } from 'react';
import ProductDetailes from './ProductDetailes';
import axios from 'axios';
import { DproductDetails } from '../../Data/Data';
import WishlistToast from './WishlistToast';

const Product = () => {
    const [data, setData] = useState([]);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("img/product.json");
                setData(res.data.map(item => ({ ...item, count: 0 })));
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

    const handleAddToWishlist = (itemName) => {
        setToastMessage(`${itemName} added to wishlist!`);
        setToastVisible(true);
    };

    return (
        <>
            {DproductDetails.map((e, i) => {
                const item = data[i];
                if (!item) return null;

                return (
                    <div className="card7 row container-fluid mx-auto my-5" key={i}>
                        <div className="col-lg-2 ps-4">
                            <div className="card w-100 border-top-0 border-bottom-0">
                                <div className="img-continar position-relative">
                                    <img className='w-100 position-absolute' src={item.img} alt={item.name} />
                                    <img
                                        src={item.overlay}
                                        className="overlay w-100"
                                        alt="overlay image"
                                    />
                                </div>
                                <div className="icon position-absolute top-0 end-0 d-flex flex-column align-items-center">
                                    <span>
                                        <i
                                            className="fa-solid fa-heart"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleAddToWishlist(item.name)}
                                        ></i>
                                    </span>
                                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                                    <span><i className="fa-solid fa-circle-xmark"></i></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-price d-inline">{item.price}</h5>
                                    <span className='bg-danger rounded-circle p-1 text-light ms-2'>
                                        ${item.offers || ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="txt col-lg-9">
                            <p>{e.paragraph3}</p>
                            <p><strong>Tags: {item.tag}</strong></p>
                            <p><strong>SKU: {item.SKU}</strong></p>
                            <p><strong>Category: {item.category}</strong></p>
                            <input
                                type="number"
                                placeholder="Count"
                                min={0}
                                value={item.count}
                                onChange={(e) => handleCountChange(i, e.target.value)}
                            />
                            <div>
                                Total: {item.count * Number(item.price.replace(/[^0-9.]/g, ''))}$
                            </div>
                            <h6><i className="fa-regular fa-clock" /> Orders ship within 5 to 10 business days.</h6>
                            <h6><i className="fa-solid fa-truck-fast" /> Hoorey! This item ships free to the US.</h6>
                        </div>
                    </div>
                );
            })}

            <ProductDetailes />
            <WishlistToast
                show={toastVisible}
                onClose={() => setToastVisible(false)}
                message={toastMessage}
            />
        </>
    );
};

export default Product;

