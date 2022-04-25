import "../../appStyles.css";
import mountains from "../../Images/mountains.jpeg";

export default function Home(){
    return(
        <div>
           <h1 className="page-title">The Great Outdoors</h1>
            <br />

            <div>
                <p className="intro">
                    There is an overwhelming amount of outdoor gear in this world, and some
                    items are much better than others. You have found the hub for reviews
                    from people who have hands on experience with the gear that you are
                    thinking about purchasing!
                </p>
                
                <p className="intro">
                    However, this isn't just the place for reviews. We also have a
                    marketplace available where you can purchase gear from those around you
                    or sell used gear of your own.
                </p>

                <p className="intro">
                    <b>Welcome to The Great Outdoors.</b>
                </p>
            </div>
        </div>
    );
}
