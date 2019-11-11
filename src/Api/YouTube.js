import Axios from "axios";

const KEY = "AIzaSyDxn4D41dQWVHj54jR5ikSNFH-hJ2BhcmA";

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})