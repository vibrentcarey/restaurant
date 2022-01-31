import React from 'react';
import classNames from 'classnames'


const Featured = (props) => {
  const cardClass = classNames({
    'bg-primary': props.primary,
    'bg-secondary': props.secondary,
    'bg-accent': props.accent,
  });

  return (
    <div class={`card max-w-md shadow-2xl lg:card-side ${cardClass} `}>
      <div class="card-body">
        <header className='flex items-center mb-4'>
          <div class="avatar">
            <div class="rounded-full w-14 h-14 ring-offset-base-100 ring-offset-2">
              <img src={`http://daisyui.com/tailwind-css-component-profile-${props.profile}@56w.png` }/>
            </div>
          </div>
          <h3 className={`mx-2 text-lg font-semibold ${props.primary && 'text-primary-content'}`}>{props.title}</h3>
        </header>
        <div className='prose'>
        <p className={props.primary && 'text-primary-content'} >{props.review}</p>
        <div class="justify-end card-actions">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" />
            <input type="radio" name="rating-6" checked="checked" class="mask mask-star-2 bg-warning" />
            <input type="radio" name="rating-6" checked="checked" class="mask mask-star-2 bg-warning" />
            <input type="radio" name="rating-6" checked="checked" class="mask mask-star-2 bg-warning" />
            <input type="radio" name="rating-6" checked={false} class="mask mask-star-2 bg-warning" />
          </div>
        </div>
      </div>
    </div></div>
  )
}
export default Featured;