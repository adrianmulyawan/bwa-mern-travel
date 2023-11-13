import React from 'react';
import ButtonComponent from '../Button/button.component';
import './BreadCrumb.scss';
import propTypes from 'prop-types';

const BreadCrumbComponent = (props) => {
  const className = ["breadcrumb", props.className];

  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === props.data.length - 1 ? " active" : ""
              }`}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <ButtonComponent type="link" href={item.pageHref} style={{ textDecoration: 'none' }}>
                  {item.pageTitle}
                </ButtonComponent>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

BreadCrumbComponent.propTypes = {
  data: propTypes.array,
  className: propTypes.string
}

export default BreadCrumbComponent;
