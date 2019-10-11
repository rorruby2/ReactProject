import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

class MemeGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topTxt: null,
      bottomTxt: null,
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemesImages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({
          allMemesImages: memes
        })
      })
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImages.length)
    const randMemeImg = this.state.allMemesImages[randNum].url;
    this.setState({
      randomImg: randMemeImg
    })
  }

  render() {
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
            <div className="section section_color">
              <form className='meme-form' onSubmit={this.handleSubmit}>
                <input type="text" name="topText" placeholder="Top Text" value={this.state.topText || ''} onChange={this.handleChange}/>
                <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText || ''} onChange={this.handleChange}/>
                <button>Gen</button>
              </form>
              <div className='meme'>
                <img src={this.state.randomImg} alt=""/>
                <h2 className='top'>{this.state.topText}</h2>
                <h2 className='bottom'>{this.state.bottomText}</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MemeGenerator;
