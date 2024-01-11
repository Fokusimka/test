import { PostDetailsProps } from 'types'
import DetailsCard from 'entities/ui/detailsCard'
import Button from 'shared/ui/button'
import { useGetSelectedPostQuery } from 'app/store/api'

import './postDetails.css'

const PostDetails = ({ id } : PostDetailsProps) => {

    const { data, isLoading } = useGetSelectedPostQuery(id)

    if (isLoading) return (
        <div className='postDetailsLoading'>
            <h1>Loading...</h1>
        </div>
    )

    return (
        <div className='postDetails'>
            <DetailsCard data={data} />
            <Button href='/' title='Вернуться к списку' />
        </div>
        
    ) 
}

export default PostDetails