import React from 'react';
import '../assets/scss/style.scss';
import ButtonComponent from '../components/Button/button.component';
import { Slide } from 'react-reveal';

const PickedPart = (props) => {
  const { data, refMostPicked } = props;
  
  return (
    <Slide left>
      <section className='container section-most-picked' ref={ refMostPicked }>
        <h1 className='text-most-picked'>Most Picked</h1>
        <div className="container-grid">
          {
            data.map((item, index) => {
              return (
                <div className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`} key={ `${item.id}${index}` }>
                  <div className="card card-featured">
                    <div className="tag">
                      { item.price }
                      <span className='font-weight-light'> per { item.unit }</span>
                    </div>
                    <figure className='img-wrapper'>
                      <img className='img-cover' src={ item.imageUrl } alt={ item.name } />
                    </figure>
                    <div className="meta-wrapper">
                      <ButtonComponent className="stretched-link d-block text-white" type="link" href={`properties/${item._id}`} style={{ textDecoration: 'none' }}>
                        <h5>{ item.name }</h5>
                      </ButtonComponent>
                      <span>{ item.city }, { item.country }</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </Slide>
  );
}

export default PickedPart;
