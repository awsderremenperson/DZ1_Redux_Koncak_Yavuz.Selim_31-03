import React, { useState } from 'react';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreatePost = () => {
        console.log('Title:', title);
        console.log('Body:', body);
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <br />
                <button type="button" onClick={handleCreatePost}>Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
