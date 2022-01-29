import React from 'react';

const Featured = () => {
  return (

    <div class="card card-bordered max-w-xs m-2 prose">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" className='m-0' />
      </figure>
      <div class="card-body pt-0">
        <h2 class="card-title">Top image
          <div class="badge mx-2 badge-secondary">NEW</div>
        </h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
        <div class="justify-end card-actions">
          <div data-tip="Price: $" class="tooltip">
            <button class="btn btn-secondary">More info</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Featured;