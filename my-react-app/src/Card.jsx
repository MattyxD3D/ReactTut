import profilePic from './assets/bikeEdit.png'
function Card(){

return(

<div className = 'card'>
<img className = 'card-image' src={profilePic} alt="Profile Picture" />
<h2 className = 'card-title'>Product Name</h2>
<h3 className = 'category'>Categrory: reference here</h3>
<p>I study IT and bike everywhere</p>

<button className = 'add2CardBtn'>Add to cart</button>
</div>

);

}

export default Card