import React from 'react';
import '../assets/scss/style.scss';
import { Slide } from 'react-reveal';
import ButtonComponent from '../components/Button/button.component';

const CategoryPart = (props) => {
  const { data } = props;

  return (
    <Slide left>
      <section className='container section-category'>
        {
          data.map((category, index) => {
            return (
              <div key={ index += 1 }>
                <h4 className='text-category'>
                  { category.name }
                </h4>
                <div className="container-grid" style={{ marginBottom: '70px' }}>
                  {
                    category.items.length === 0 ? <div className='row'>
                      <div className="col-auto align-items-center">
                        There is not destination at this category
                      </div>
                    </div> : category.items.map((item, itemIndex) => (
                      <div className="item column-3 row-1" key={ itemIndex }>
                        <div className="card">
                          { 
                            item.isPopular && <div className="tag">
                              Popular <span className='font-weight-light'>Choice</span>
                            </div> 
                          }
                          <figure className='img-wrapper' style={{ height: '180px' }}>
                            <img className='img-cover' src={ item.imageUrl } alt={ item.name } />
                          </figure>
                          <div className="meta-wrapper">
                            <ButtonComponent className="stretched-link d-block text-grey-800" href={`/properties/${item._id}`} type="link" style={{ textDecoration: 'none' }}>
                              <h5>
                                { item.name }
                              </h5>
                            </ButtonComponent>
                            <span className='text-grey-500'>
                              { item.city }, { item.country }
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </section>
    </Slide>
  );
}

export default CategoryPart;
