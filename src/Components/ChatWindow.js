import useAxiosGet from '../Hooks/useAxiosGet';
import moment from 'moment';


function ChatWindow() {
    const chats = useAxiosGet('chat');

    let content = '';
    if (chats.loading) {
        content = <h4>Loading ...</h4>
    } else if (chats.data.length === 0) {
        content = <h5 className="text-muted">Start a chat</h5>
    } else {
        content = (<div className="">
            {chats.data.map((chat) => 
                <div>
                    <h4>{chat.username} </h4>
                    <p>{moment(chat.createdAt).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    <p>{chat.message} </p>
                </div>)}
                </div>
        )
    }
    return (
        <div className="container mt-5 mb-5 border bg-light overflow-auto" id="chat-message-box">
            <div className=" pt-2">{content}</div>
        </div>
    )
}

export default ChatWindow;