import image from '../../green_bite.jpeg'

const RestaurantSummary = () => {
  return (
    <div class="card lg:card-side card-bordered prose p-2 mt-12"> 
      <figure className="mb-0 h-full overflow-hidden">
        <img src={image} className='object-contain h-64 rounded-lg m-1'/>
      </figure>
      <div class="card-body">
        <h2 className="mt-0">Healthy & Convenient</h2>
        <p>Here at Green Bite we are dedicated to prepping and
          delivering Vegan Meals that work with your busy schedule. <br /></p>
        <div class="card-actions mt-0">
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>


  )
}

export default RestaurantSummary