import React from 'react';
import classNames from 'classnames'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Featured = (props) => {
  const cardClass = classNames({
    'bg-primary': props.primary,
    'bg-secondary': props.secondary,
    'bg-accent': props.accent,
  });

  return (
    <AnimationOnScroll animateIn='animate__flipInY' animateOut="animate__flipOutY" animateOnce>
      <div class={`card max-w-md shadow-2xl lg:card-side ${cardClass} `}>

        <div class="card-body">
          <header className='flex items-center mb-4'>
            <div className="avatar">
              <div className="rounded-full w-14 h-14 ring-offset-base-100 ring-offset-2">
                <img src={`http://daisyui.com/tailwind-css-component-profile-${props.profile}@56w.png`} alt='avatar' />
              </div>
            </div>
            <h3 className={`mx-2 text-lg font-semibold ${props.primary && 'text-primary-content'}`}>{props.title}</h3>
          </header>
          <div className='prose'>
            <p className={props.primary && 'text-primary-content'} >{props.review}</p>
            <div className="justify-end card-actions">
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" />
                <input type="radio" name="rating-6" checked="checked" readOnly class="mask mask-star-2 bg-warning" />
                <input type="radio" name="rating-6" checked="checked" readOnly class="mask mask-star-2 bg-warning" />
                <input type="radio" name="rating-6" checked="checked" readOnly class="mask mask-star-2 bg-warning" />
                <input type="radio" name="rating-6" checked={false} readOnly class="mask mask-star-2 bg-warning" />
              </div>
            </div>
          </div>
        </div></div>
    </AnimationOnScroll>
  )
}
export default Featured;