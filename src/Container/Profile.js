import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Avatar from 'react-avatar-edit';
import { Grid, Cell } from 'react-mdl';

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      preview: '',
      changeProfile: false,
      src : 'https://scx1.b-cdn.net/csz/news/800/2015/alberteinste.jpg',
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  onClose() {
    this.setState({preview: ''})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  changeProfile() {
    this.setState({changeProfile: true, src: ''});
  }

  uploadProfile(image_url){
    this.setState({src: image_url, changeProfile:false})
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    console.log("Preview =>", this.state.preview)
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
            <div className="landing-grid" style={{display: "flex", marginTop: '10px'}}>
            {
              (this.state.changeProfile) 
              ?
              <div style={{display: "flex", marginTop: '10px'}}>
                <Avatar
                  width={390}
                  height={295}
                  onCrop={this.onCrop}
                  onClose={this.onClose}
                  onBeforeFileLoad={this.onBeforeFileLoad}
                  src={this.state.src}
                />
                {this.state.preview!==undefined && this.state.preview!==""
                ?
                <div className='jj'>
                  <img src={this.state.preview} alt="avatar" className="avatar-img" />
                  <a href="#" className='pp' onClick={() => this.uploadProfile(this.state.preview)}>Upload</a>
                </div>
                :
                <div></div>}
              </div>
              :
              <div>
                <div className="profile-pic" style={{width: "390px", height: "295px"}}>
                  <img src={this.state.src} alt="avatar" style={{width: "390px", height: "295px"}}/>
                  <div className="edit">
                    <a onClick={() => this.changeProfile()}><i className="fa fa-pencil fa-lg"></i></a>
                  </div>
                </div>
                <div style={{width: '70%'}}>
                  <p>
                  </p>
                </div>
              </div>
            }
            </div>
            <div style={{display: "flex", marginTop: '10px'}}>
              <div className="section sidebar" style={{width: "30%"}}>
                
              </div>
              <div className="section sidebar" style={{width: '70%', marginLeft: '20px'}}>
                <p>
                  If you test out CSS media queries on a mobile device, you most likely won't see the expected media queries applied initially. There's nothing wrong with your syntax, it's just that your mobile browser thinks it's a desktop browser until someone clues it in. By default mobile devices such as iPhone or Android zoom out on webpages automatically when they are viewed to give the user a more expansive view of the page, meaning everything appears smaller, but also, more pixels are squeezed onto the screen. On iPhone devices, up to 980 pixels of a webpage are shown, and on Android devices, 800 pixels. The benefit of this is that it makes regular, non-mobile optimized webpages appear manageable on this small screen (which is the majority right now), instead of requiring the user to swipe half a mile in which ever direction to view various sections of the page. However, if your page is optimized for mobile devices (via CSS media queries and changing the layout of webpages accordingly), then all of a sudden this "zoom out" behaviour only gets in the way and defeats our efforts. It means that our CSS media queries will match the dimensions of the "zoomed out" device's, and not its actual (ie: 980px for device-width on the iPhone instead of 320px). So whenever you're optimizing a webpage for mobile devices, the first step is to define a particular META tag on your page to alter/ disable the "zoom in" behaviour of mobile browsers, and that's with:
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;