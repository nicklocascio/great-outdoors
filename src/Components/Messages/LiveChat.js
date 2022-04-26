import {React, useState, useEffect} from "react";
import Parse from "parse";
import {useParseQuery} from "@parse/react";
import {getItemEmail} from "../../Services/Market.service";
import "./messageStyles.css";

const LiveChat = () =>{


    let user = Parse.User.current();
    const query = new Parse.Query('Message');
    const [messageInput, setMessageInput] = useState("");
    const[email1, setEmail1] = useState();
    const[email2, setEmail2] = useState({email: ""});

    //Sets user email
    useEffect(() => {
        if(user) {
            getItemEmail(user.id).then((emailStr) => {
                setEmail1(emailStr);
            })
        } else {
          console.log("Failure")
        }
      }, [user]);

    //Gets all messages where sender and receiver have the two emails
    query.containedIn('sender', [email1, email2.email]);
    query.containedIn('receiver', [email1, email2.email]);
    query.ascending("createdAt");
    query.includeAll();
    Parse.enableLocalDatastore();

    //Sets query parameters
    const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(query, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

    //Handler to keep sidebar selection
    const conversationSelector = (e) =>{
      var list = document.getElementById("conversations");
      let selected = list.querySelectorAll('.selected');
      for(let elem of selected){
        elem.classList.remove('selected');
      }
      e.target.classList.add('selected');
      console.log(e.target.key);
    }

    //Handler for text input of email
    const onChangeHandler = (e) => {

      e.preventDefault();
      const { name, value: newValue } = e.target;

      setEmail2({
        ...email2,
       [name]: newValue
      });

      console.log(email2.email);
    };
  

    const sendMessage = async () => {
        try {
            const messageText = messageInput;
    
            // Create new Message object and save it
            let Message = new Parse.Object("Message");
            Message.set("text", messageText);
            Message.set("sender", email1);
            Message.set("receiver", email2.email);
            Message.save();
    
            // Clear input
            setMessageInput("");
        } catch (error) {
            alert(error);
        }
    };

    // Helper to format createdAt value on Message
  const formatDateToTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div>
      <div className="sidemenu">
        <ul id="conversations" onClick={conversationSelector}>
          <li>New Message</li>
          <li>If</li>
          <li>Only</li>
          <li>I</li>
          <li>Had</li>
          <li>More</li>
          <li>Time</li>
        </ul>
      </div>
      <div className="titlebar">
        <br />
        <h1>Messages</h1>
      </div>
      <div className="recipientbar">
      <input
          className="recipient"
          name="email"
          value={email2.email}
          onChange={onChangeHandler}
          placeholder={"Recipient..."}
          size="large"
        />
      </div>
      {results && (
        <div className="messages">
          {results
            .sort(function(a, b){return a.get("createdAt")-b.get("createdAt")})
            .map((result) => (
              <div
                key={result.id}
                className={
                  result.get("sender") === email1
                    ? "message_sent"
                    : "message_received"
                }
              >
                <p className="message_bubble">{result.get("text")}</p>
                <p className="message_time">
                  {formatDateToTime(result.get("createdAt"))}
                </p>
                <p className="message_name">
                  {result.get("sender")}
                </p>
              </div>
            ))}
        </div>
      )}
      <div className="messagebar">
        
        <h2 className="new_message_title">New message</h2>
        <input
          className="form_input"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
          placeholder={"Your message..."}
          size="large"
        />
        <br />
        <br />
        <button
          type="primary"
          color={"#208AEC"}
          size={"large"}
          onClick={sendMessage}
        >
          Send message
        </button>
                
        <br />
        <br />
        {isLoading && <p>{"Loading…"}</p>}
        {isSyncing && <p>{"Syncing…"}</p>}
        {isLive ? <p>{"Status: Live"}</p> : <p>{"Status: Offline"}</p>}
        {error && <p>{error.message}</p>}
        {count && <p>{`Count: ${count}`}</p>}
        <br />
        <br />
      </div>
    </div>
  );
};

export default LiveChat;
