import React, { StrictMode } from "react"
import "./App.css"
import Examples from "./Example"
import Manual from "./Manual"





export default class App extends React.Component {
      handleClick = () => {
            console.log('this is:', this);
      }
      render() {
            return (
                  <StrictMode>
                        <div style={{ marginTop: "40px" }}>
                              <Examples />
                              <Manual/>
                        </div>
                     


                  </StrictMode>

            )
      }
}
