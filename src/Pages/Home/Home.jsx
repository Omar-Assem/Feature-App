import CardHeader from "./CardHeader"
import Future from "./Future"
import Hero from "./Hero"
import Testimonials from "./Testimonials"
import Cards3 from "./Cards-3"
import Carousel from "./Cursle"
import Timer from "./Timer"
import Gallery from "./Gallery"

import axios from "axios";
import { useEffect,useState } from "react";

const Home = () => {
  const [data,setData] = useState([])
  useEffect( () => {
 const fetchData = async()=>{
 try{
  let res = await axios.get("img/product.json")
  setData(res.data)
  
 }catch(Err){
  console.log(Err)
 }
 }
 fetchData()
  }
  , []);

  return (
    <>

      <Hero/>
      <CardHeader/>
      <Future/>
      <Cards3/>
      <Testimonials/>
      <Carousel/>
      <Timer/>
      <Gallery/>
      <div className="">
        <div className="row">
          {data.slice(0,8).map((e,i)=>{
            return(
              <>
                <div className="col-lg-3" key={i}>
            <div className="card">
              <div className="card-body" >
              <img src={`${e.img}`} alt="" />
              <h2>{e.name}</h2>
              <p>{e.price}</p>
              <p>{e.offers}</p>
              <a className="text-dark" href="#">{e.category.join(" | ")}</a>
              <p>{e.SKU}</p>
              <p>{e.tag.join(" | ")}</p>
              </div>
            </div>
          </div>
              </>
            )
          })}
        
        </div>
      </div>
    </>
  );
};

export default Home;
