import React from 'react'
import styles, { layout } from "../../styles/styles";
import Sidebar from "@components/Sidebar";

const Docs = () => {
  return (
    <section className = "w-full  flex-row">
        
        <div className = "mb-6">
            <h1 className = "head_text  flex-center text-left">Documentation</h1>
            <h3 className = {`${styles.heading2} mb-16`}>Getting Started with our Digital Learning Ecosystem</h3>
            <p className={`${styles.paragraph}  paragraph_text max-w-[470px] mt-4`}>
                Documentation
            </p>
        </div>
        <br></br>
        <div className="flex-left">
            <Sidebar />
        </div>

    </section>
    
  )
}

export default Docs