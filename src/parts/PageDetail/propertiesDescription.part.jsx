import React from 'react';

const PropertiesDescriptionPart = (props) => {
  const { description, features } = props;
  return (
    <main>
      <h4 className='properties-description-title'>
        About the place
      </h4>
      <div
        className="properties-description-text"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="row row-features-properties justify-content-center" style={{ marginTop: '30px' }}>
        {
          features.map((feature, index) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-3" key={`feature-${index}`} style={{ marginBottom: '20px' }}>
                <img src={ feature.imageUrl } className='img-flud' alt="feature-pic" style={{ width: '38px' }} />
                <br />
                <div className="data-quantity my-lg-2 my-sm-2 my-md-2">
                  <span className='quantity'>{ feature.qty } </span>
                  <span className='name'>{ feature.name }</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}

export default PropertiesDescriptionPart;
