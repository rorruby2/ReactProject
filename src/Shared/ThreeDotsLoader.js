import React from "react"
import Loader from 'react-loader-spinner'

const ThreeDotsLoader =() => {
  return(
    <div style={{textAlign:"center"}}>
      <Loader type="ThreeDots" color="#3273dc"/>
    </div>
  )
}
export default ThreeDotsLoader ;