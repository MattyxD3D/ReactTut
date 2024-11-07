import profilePic from './assets/bikeEdit.png'
function Card(){

return(

<div className = 'card'>
<img className = 'card-image' src={profilePic} alt="Profile Picture" />
<h2 className = 'card-title'>Cycling Dev</h2>
<p>I study IT and bike everywhere</p>
</div>

);

}

export default Card