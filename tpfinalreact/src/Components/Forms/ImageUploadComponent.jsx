// https://codepen.io/hartzis/pen/VvNGZP
//https://gist.github.com/hartzis/0b77920380736f98e4f9#file-imageuploadcomponent-jsx
import React, { Component } from 'react'
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      uploadValue:0,
      picture:null
    };

  }


  render() {

    return (
      <div>
          <progress value={this.state.uploadValue} max='100'></progress>
        <br/>
        <input id='image' name='image' type="file" onChange={this.props.change} />
        <br/>
        <img width='320' src={this.state.picture} alt='' />


      </div>
    )
  }

}
export default ImageUpload