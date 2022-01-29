import image from '../../green_bite.jpeg'

const RestaurantSummary = () => {
  return (
    <div class="card md:card-side card-bordered prose p-2 sm:p-4 mt-12"> 
      <figure className="my-0 h-full overflow-hidden ">
        <img src={image} className='h-64 my-0 rounded-lg '/>
      </figure>
      <div class="card-body">
        <h2 className="mt-0">Healthy & Convenient</h2>
        <p>Here at Green Bite we are dedicated to prepping and
          delivering Vegan Meals that work with your busy schedule. <br /></p>
        <div class="mt-0">
          <button class="btn btn-primary mt-6">Get Started</button>
        </div>
      </div>
    </div>


  )
}

export default RestaurantSummary