
import MainLayout from "../components/MainLayout"
import Image from "next/image"
import Typed from "react-typed"
export default function Home() {
    const ROLES = ["Developer","Tech Lover", "Team Player","React JS"]
  return (
    <MainLayout>
      <div className="index-container">
        <div className="index-row">
          <div className="index-col index-col-left">
            <Image
            src="/images/head.png"
            height="400"
            width="500"
            className="index-image"
            >

            </Image>
          </div>
          <div className="index-col index-col-right">
            <h1>
              Welcome to the portfolio website of Alperen Arıkan.
              <br/>
              Get informed, collaborate and discover projects I was working on through the years!
            </h1>
              <Typed
              strings={ROLES }   
              typeSpeed={70}
              backSpeed={70}
              backDelay={1500}
              loopCount={2}
              showCursor
              className={"self-typed"}
              cursorChar={"|"} ></Typed>

            <h2>
              Let's take a look on my work.
            </h2>
          </div>
        </div>
      </div>
    </MainLayout>

  )
}
