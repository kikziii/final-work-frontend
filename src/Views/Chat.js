import AddChatMessage from "../Components/AddChatMessage";
import ChatWindow from "../Components/ChatWindow";


function Chat() {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">            
                <ChatWindow/>
                <AddChatMessage/>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Chat;