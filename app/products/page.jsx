import React from 'react'
import styles, { layout } from "../../styles/styles";
import Sidebar from "@components/Sidebar";

const Products = () => {
  return (
    <section className = "w-full  flex-row">
        
        <div className = "">
            <h1 className = "head_text  flex-center text-left">Products</h1>
            <h3 className = {styles.heading2}>Modernize your Digital Learning Ecosystem</h3>
            <p className={`${styles.paragraph}  paragraph_text max-w-[470px] mt-5`}>
                Products
            </p>
        </div>
        <br></br>
        <div className="flex-left">
            <Sidebar />
        </div>

    </section>
    
  )
}

export default Products
