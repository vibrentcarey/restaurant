import image from '../../green_bite.jpeg'

const RestaurantSummary = () => {
  return (
    <div className="card md:card-side card-bordered prose p-2 sm:p-4 my-12">
      <figure className="my-0 h-full overflow-hidden ">
        <img src={image} className='h-64 my-0 rounded-lg ' alt='healthy food' />
      </figure>
      <div className="card-body">
        <h2 className="mt-0">Healthy & Convenient</h2>
        <p>Here at Green Bite we are dedicated to prepping and
          delivering Vegan Meals that work with your busy schedule. Place your order online below.<br /></p>
        <div className="mt-0">
          <button className="btn btn-primary mt-6">Get Started</button>
        </div>
      </div>
    </div>


  )
}

export default RestaurantSummary