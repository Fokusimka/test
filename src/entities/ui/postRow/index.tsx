import { PostRowProps } from "types";
import Button from 'shared/ui/button';

import './postRow.css'

export const PostRow = ({ data }: PostRowProps) => {
    return (
        <div className='postRow'>
            <span>{data.id}</span>
            <span className="postRowTitle">{data.title}</span>
            <span className='cuted'>{data.content}</span>
            <Button href={`/Details/${data.id}`} title='Просмотр' />
        </div>
    )
}