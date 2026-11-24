import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CommentTableHttp() {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        console.log(response)
        setComments(response.data);
    }
    useEffect(() => {
        fetchComments()
    }, []);

    return <>
        <h3>Comment Table Http</h3>
        <table className="table table-bordered">
            <tbody>
                {comments.map((comment) => {
                    return <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.postId}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
