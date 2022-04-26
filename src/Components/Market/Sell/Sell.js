export default function Sell({ itemChange, fileInput, modelChange, sizeChange, genderChange, levelChange, onClick }){
    return(
    <div>
        <br />
        <h3>
            Put an item up for sale below:
        </h3>
        <br />
        <div>
            <form>
                <b>What are you selling?</b>
                <br />
                <div onChange={itemChange} className="checkboxes">
                    <input type="radio" name="item" value="Skis" /><label>Skis</label>
                    <input type="radio" name="item" value="Snowboard" /><label>Snowboard</label>
                    <input type="radio" name="item" value="Mountain Bike" /><label>Mountain Bike</label>
                    <input type="radio" name="item" value="Road Bike" /><label>Road Bike</label>
                    <input type="radio" name="item" value="Rock Climbing Gear" /><label>Rock Climbing Gear</label>
                    <input type="radio" name="item" value="Hiking Gear" /><label>Hiking Gear</label>
                </div>

                <br />

                <label htmlFor="image"><b>Please upload an image of your item</b><br /></label>
                <input type="file" name="image" ref={fileInput}></input>
                
                <br />
                <br />

                <label htmlFor="model"><b>What's the model name? </b></label>
                <input type="text" name="model" onChange={modelChange} />

                <br />
                <br />

                <label htmlFor="size"><b>What size is this item? </b></label>
                <input type="text" name="size" onChange={sizeChange} />

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
                <br />
                <br />
            </form>
        </div>
        <hr />
    </div>
    );
}