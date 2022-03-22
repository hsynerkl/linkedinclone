import { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import Post from './Post'


const Feed = () => {
    const [addPost, setAddPost] = useState({
        message: ""
    });
    const [posts, setPosts] = useState([
        { message: "write something" },
        { message: "hello everyone" },
        { message: ":)" },
        { message: "😎❤😍😁😂🤣" },
        { message: "AAAAAAAAAAA" },

    ]);

    const sendPost = (e) => {
        e.preventDefault();
        if (addPost.message == "") {
            alert("cannot be left blank")
            return;
        }
        setPosts([{ message: addPost.message }, ...posts]);
        setAddPost({ message: '' });
    }
    const removeItem = (index) => {
        posts.splice(index, 1)
        setPosts([...posts])
    }


    return (
        <div className="feed">

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" className="" value={addPost.message} onChange={(e) => setAddPost({ ...addPost, message: e.target.value })} />
                        <button type="submit" onClick={(e) => sendPost(e)} className="">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewMonthIcon} title="Write article" color="#7FC15E" />
                </div>
                <div>

                </div>

            </div>
            {posts.map((post, index) => (
                <div className="posts1" key={index}>
                    <div className="removebtn" onClick={() => { removeItem(index) }}>x</div>
                    <Post
                        name="Hüseyin Erkal"
                        description="hsynerkl34@gmail.com"
                        message={post.message}
                        setPost={setPosts}
                        posts={posts}
                    />

                </div>
            ))}
        </div>
    )
}

export default Feed