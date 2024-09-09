import React ,{ useContext,useState,useEffect }from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../firebase/config';
import { Link } from 'react-router-dom';
import {postContext} from '../../store/PostContext'
function Posts() {
  const [products, setProducts] = useState([])
  const {setPostDetails}=useContext(postContext)
  
  useEffect(()=>{
    getDocs(collection(firestore,"product")).then((querySnapshot)=>{
      const allProducts=querySnapshot.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }))
      setProducts(allProducts)
    }).catch((error)=>{
      console.error("Error fetching Products!",error)
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {
            products.map((product)=>{
              return (
                <Link to ={'/view'}>
                  <div
                    className="card" onClick={()=>{
                      setPostDetails(product)
                    }}
                    key={product.url}
                  >
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={product.url} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate" style={{color:'black'}}>&#x20B9; {product.price}</p>
                      <span className="kilometer" style={{color:'black'}}><strong>{product.name}</strong></span>
                      <p className="name" style={{color:'black'}} >{product.category}</p>
                    </div>
                    <div className="date">
                      <span style={{color:'black'}}>{product.createdAt}</span>
                    </div>
                    
                  </div>
                </Link>

              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {
            products.map((product)=>{
              return (
                <Link to={'/view'}>
                
                  <div
                    className="card"
                    onClick={()=>{
                      setPostDetails(product)
                    }}
                    key={product.url}
                  >
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={product.url} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate" style={{color:'black'}}>&#x20B9; {product.price}</p>
                      <span className="kilometer" style={{color:'black'}}>{product.category}</span>
                      <p className="name" style={{color:'black'}}>{product.name}</p>
                    </div>
                    <div className="date">
                      <span style={{color:'black'}}>{product.createdAt}</span>
                    </div>
                  </div>
                </Link>

              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
