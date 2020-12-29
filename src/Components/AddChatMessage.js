import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function AddChatMessage() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const addNewChatMessage = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForChat = [];
        if (username === '') {
            errorsForChat.push('Please enter username');
        }

        if (message === '') {
            errorsForChat.push('Please enter your message');
        }

        if (errorsForChat.length > 0) {
            setErrors(errorsForChat);
            setLoading(false);
            return;
        }

        await AxiosPost('chat', {
            username,
            message,
        });
        setLoading(false);
        setUsername('');
        setMessage('');         
    };

    const sendButtonText = loading ? 'Sending ...' : 'Send';

    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div className="container mb-5">
            {errorsElement}
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} disabled={loading} onChange={handleUsernameChange} type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Type your message</Form.Label>
                    <Form.Control value={message} disabled={loading} onChange={handleMessageChange} as="textarea" rows={3} placeholder="Your message comes here" />
                </Form.Group>
                <Button onClick={addNewChatMessage} disabled={loading} variant="dark">
                    {sendButtonText}
                </Button>
            </Form>
        </div>
    )
}

export default AddChatMessage;