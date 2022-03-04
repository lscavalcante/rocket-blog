import Header from "./components/header";
import Line from "./components/line";
import Posts from "./components/posts";
import Principal from "./components/principal";
import styles from "./styles/styles.module.scss";

function App() {

  return (
    <>
      <main className={styles.main}>
        <Header/>
        <Principal/>
      </main>
      <Line/>
      <Posts/>
    </>
  )
}

export default App
