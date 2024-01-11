import React from 'react'
import { useParams } from 'react-router';
import PostDetails from 'widgets/ui/postDetails';

const TaskDetailsPage = () => {

    const { id } = useParams()

    return (
        <div>
            <PostDetails id={id || '1'} />   
        </div>
    );
};

export default TaskDetailsPage;