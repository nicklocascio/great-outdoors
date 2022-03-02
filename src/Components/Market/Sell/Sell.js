export default function Sell(){
    return(
    <div>
        <h3>
            Put an item up for sale below:
            </h3>
            <div>
            <form>
                <p>
                <b>What are you selling?</b>
                <br />
                <input type="radio" name="item" value="ski" />Skis
                <input type="radio" name="item" value="snowboard" />Snowboard
                <input type="radio" name="item" value="bike_mountain" />Mountain Bike
                <input type="radio" name="item" value="bike_road" />Road Bike
                <input type="radio" name="item" value="rock_climb" />Rock Climbing
                Gear <input type="radio" name="item" value="hike" />Hiking Gear
                </p>

                <label for="description">
                <b>Please enter a description for this gear</b><br />
                </label>
                <textarea name="description" cols="70" rows="10"></textarea>

                <br />
                <br />

                <label for="size">
                <b>What size is this item? </b>
                </label>
                <input type="text" name="size" />

                <br />
                <br />

                <label for="gender">
                <b>What gender is this gear for? </b>
                </label>
                <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>

                <br />
                <br />

                <label for="level">
                <b>What level of participant is this gear for? </b>
                </label>
                <select name="level">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                </select>

                <br />
                <br />

                <button type="submit">Sell</button>
            </form>
            </div>
            <hr />
        </div>
    );
}