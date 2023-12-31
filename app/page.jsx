import Head from "next/head";
import styles, { layout } from "../styles/styles";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
      <h1 className = "head_text  flex-center text-left">Creative Learning Services</h1>
      <h3 className = {styles.heading2}>Modernize your Digital Learning Ecosystem</h3>
      <p className={`${styles.paragraph}  paragraph_text max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Feed />
    </section>
  )
}

export default Home
