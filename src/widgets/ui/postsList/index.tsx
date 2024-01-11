import { PostRow } from 'entities/ui/postRow'
import { useGetPostsQuery } from 'app/store/api'
import { PostDetailProps } from 'types';

import './postsList.css'

const PostsList = () => {

    const {data, isLoading} = useGetPostsQuery('null');

    if (isLoading) return (
        <div className='postsListLoading'>
            <h1>Loading...</h1>
        </div>
    )

    return (
        <div className='postsList'>
            {data?.map((item: PostDetailProps) => <PostRow key={item.id} data={item} />)}
        </div>
    )
}

export default PostsList