export default function PostReview({ itemChange, fileInput, titleChange, bodyChange, onClick }){
    return(
        <div>
            <h2>Leave a Review</h2>
                <div>
                <form>
                    <b>What category matches the item you're reviewing?</b>
                    <br />
                    <div onChange={itemChange}>
                        <input type="radio" name="item" value="Skis" />Skis
                        <input type="radio" name="item" value="Snowboard" />Snowboard
                        <input type="radio" name="item" value="Mountain Bike" />Mountain Bike
                        <input type="radio" name="item" value="Road Bike" />Road Bike
                        <input type="radio" name="item" value="Rock Climbing Gear" />Rock Climbing Gear 
                        <input type="radio" name="item" value="Hiking Gear" />Hiking Gear
                    </div>

                    <br />

                    <label htmlFor="reviewTitle"><b>Please enter a title for the review</b><br /></label>
                    <input type="text" name="reviewTitle" onChange={titleChange}/>

                    <br />
                    <br />

                    <label htmlFor="reviewImg"><b>Please upload an image of your item</b><br /></label>
                    <input type="file" name="reviewImg" ref={fileInput}></input>
                    
                    <br />
                    <br />

                    <label htmlFor="reviewText"><b>Please enter your review of the item</b><br /></label>
                    <textarea name="description" cols="70" rows="10" onChange={bodyChange}></textarea>

                    <br />
                    <br />

                    <button type="submit" onClick={onClick}>Submit Review</button>
                </form>
                </div>
                <br />
            </div>
    );

}