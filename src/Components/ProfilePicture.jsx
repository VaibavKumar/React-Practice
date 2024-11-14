

function ProfilePicture(){
    const imageUrl = './src/assets/pic.jpg'
    const handel = (e) =>  e.target.style.display = "none"
    return (<img onClick={(e) =>handel(e)} src={imageUrl}></img>);
}

export default ProfilePicture