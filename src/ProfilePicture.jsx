function ProfilePicture(){
    const image='./src/assets/Profile.jpeg'
    const handleClick=(e)=>{
        e.target.style.display="none";
    }
    return(
        <>
        <img onClick={(e)=>handleClick(e)} src={image} alt="" />
        </>
    );
}
export default ProfilePicture