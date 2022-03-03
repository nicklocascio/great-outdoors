import snowboard from "../../Images/snowboard.jpeg";

export default function ReviewItem(){
    
    //Insert item info here
    return(
    <div>
    <h3>
      Arbor Coda 2021 Review
    </h3>
    <img src={snowboard} style={{"height":"30%", "width": "30%"}} />
    <p>
      This was a phenomenal board for terrain park riding and all mountain
      riding. I rode this board for two weeks in Colorado and it...
      <a href="#">Read More</a>
    </p>
  </div>
    );
}