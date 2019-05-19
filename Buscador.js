import React from 'react';

const clientid = '45dde38fd80016a491056f42a1f87a8df78b18db68410430774afbe6e91879cd';
const endpoint = 'https://api.unsplash.com/search/photos';

export default class Buscador extends React.Component {

  constructor() {
    super();
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
      return <div class="col-sm-6 col-md-5"><div class="thumbnail"><img  class="lightbox" src={image.urls.thumb} key={image.id}/></div></div>
    })
  }

  render() {
    return (<div>
      <input type="text" onChange={this.trackQueryValue} id="namanyay-search-box" placeholder="Buscar..."/>
      <button onClick={this.search} id="namanyay-search-btn">Buscar</button>
      <div class="tz-gallery">
        <div class="row">
          {this.images()}
        </div>
      </div>
    </div>);
  }
}
