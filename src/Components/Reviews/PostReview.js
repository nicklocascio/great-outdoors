export default function PostReview(){
    return(
        <div>
            <h2>Leave a Review</h2>
                <div>
                <form>
                    <p>
                    <b>What category matches the item you're reviewing?</b>
                    <br />
                    <input type="radio" name="item" value="ski" />Skis
                    <input type="radio" name="item" value="snowboard" />Snowboard
                    <input type="radio" name="item" value="bike_mountain" />Mountain Bike
                    <input type="radio" name="item" value="bike_road" />Road Bike
                    <input type="radio" name="item" value="rock_climb" />Rock Climbing
                    Gear <input type="radio" name="item" value="hike" />Hiking Gear
                    </p>

                    <label for="reviewItemName">
                    <b>Please enter the name of the item</b><br />
                    </label>
                    <input name="itemname" />

                    <br />
                    <br />

                    <label for="reviewImg"><b>Please upload an image of your item</b><br /></label>
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    <br />
                    <br />

                    <label for="reviewText">
                    <b>Please enter your review of the item</b><br />
                    </label>
                    <textarea name="description" cols="70" rows="10"></textarea>

                    <br />
                    <br />

                    <button type="submit">Submit Review</button>
                </form>
                </div>
                <br />
                <hr />
            </div>
    );

}