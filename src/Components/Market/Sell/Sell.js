export default function Sell({ itemChange, fileInput, sizeChange, genderChange, levelChange, onClick }){
    return(
    <div>
        <h3>
            Put an item up for sale below:
        </h3>
        <div>
            <form>
                <b>What are you selling?</b>
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

                <label htmlFor="image"><b>Please upload an image of your item</b><br /></label>
                <input type="file" name="image" ref={fileInput}></input>
                
                <br />
                <br />

                <label htmlFor="size"><b>What size is this item? </b></label>
                <input type="text" name="size" onChange={sizeChange}/>

                <br />
                <br />

                <label htmlFor="gender"><b>What gender is this gear for? </b></label>
                <select name="gender" defaultValue={'DEFAULT'} onChange={genderChange}>
                    <option value="DEFAULT" disabled> -- select a gender -- </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <br />
                <br />

                <label htmlFor="level"><b>What level of participant is this gear for? </b></label>
                <select name="level" defaultValue={'DEFAULT'} onChange={levelChange}>
                    <option value="DEFAULT" disabled> -- select a level -- </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <br />
                <br />

                <button type="submit" onClick={onClick}>Sell</button>
            </form>
        </div>
        <hr />
    </div>
    );
}