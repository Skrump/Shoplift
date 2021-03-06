import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import PopItems from './PopItems';

import Zucchini from '../images/zucchini.jpg';
import Pie from '../images/slow-cooker-pie.jpg';
import Sandwich from '../images/sandwich.jpg';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <Carousel className='centered'>
            <Carousel.Item>
              <img style={{paddingLeft:'37vw'}} className='centered' width={900} height={500} alt="900x500" src={Zucchini}/>
              <Carousel.Caption>
                <h3>Zucchini</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{paddingLeft:'37vw'}}  width={900} height={500} alt="900x500" src={Pie}/>
              <Carousel.Caption>
                <h3>Slow Baked Pie</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{paddingLeft:'37vw'}}  width={900} height={500} alt="900x500" src={Sandwich} />
              <Carousel.Caption>
                <h3>Sandwich</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}