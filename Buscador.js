import React from 'react';

const clientid = '45dde38fd80016a491056f42a1f87a8df78b18db68410430774afbe6e91879cd';
const endpoint = 'https://api.unsplash.com/search/photos';

export default class Buscador extends React.Component {

  constructor() {
    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      images: []
    }
  }

  search() {
    fetch(`${endpoint}?query=${this.query}&per_page=20&client_id=${clientid}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        console.log(jsonResponse);
        this.setState({
          images: jsonResponse.results
        })
      })
  }

  trackQueryValue(ev) {
    this.query = ev.target.value;
  }

  images() {
    return this.state.images.map(image => {
      return <img src={image.urls.thumb} key={image.id} />
    })
  }

  render() {
    return (<div>
      <div class="box">
        <div class="container-4">
          <input type="search" id="search" placeholder="Search..." onChange={this.trackQueryValue} />
          <button onClick={this.search} class="icon"><i class="fa fa-search"></i></button>
        </div>
      </div>
      
      
      <div>{this.images()}</div>
    </div>);
  }
}
