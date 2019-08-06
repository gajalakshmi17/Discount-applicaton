import React, {Component} from 'react';
import {  Label ,Popup, Card,Image,Icon,Button} from 'semantic-ui-react';
import './locationmap.css';
import {hashHistory} from 'react-router'
import queryString from 'query-string';

export class UserLocationMarker extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (     
      <i
        className="fa fa-user fa-3x"
        style={{color: 'blue', opacity: 0.9}}
      />      
    );
  }
}

export default class VendorLocationMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    
    this.vendorSelected='';
  }
toggleVisibility(id){
   var vendor = this.props.vendorInfo.filter(item => item.id === id);
  console.log(id);
  this.vendorSelected=vendor[0]
}

showDetails=(data)=>{
 
  const path = '/filter?'+queryString.stringify({sid:data.id});
       hashHistory.push(path);
}

  render() { 
  let link="https://www.google.co.in/maps/dir/"+this.props.userLocation.lat+","+this.props.userLocation.lng+"/"+this.props.vendorInfo.lat+","+this.props.vendorInfo.lng+"/";


    return(
      <div className='popupStyle'>
      <Popup 
     trigger={ <div>
        <i
          className="fa fa-map-marker fa-3x markers"
          
        />         
       <Label  
       color="orange" floating circular  size="mini">{this.props.discount}%</Label>     
      </div>}
      content={ <Card>
      <Card.Content>
     <Image floated='left' size='small' src={'/shopimages/'+this.props.vendorInfo.shopimg} />
        <Card.Header>
         {this.props.vendorInfo.name}
        </Card.Header>
        
        <Card.Description>
          <strong>{this.props.distance}</strong> Approximately <strong> {this.props.duration}  </strong> from you
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href={link} target="_blank" >        
       <strong> Get Diretions</strong>
      </a>
      <Button basic floated="right" color='orange' size='mini' onClick={()=>this.showDetails(this.props.vendorInfo)}>details</Button>
    </Card.Content>
      
    </Card>}
      on='hover'
      hideOnScroll
      positioning='left center'
      hoverable

      />
      </div>
    );
  }
}
