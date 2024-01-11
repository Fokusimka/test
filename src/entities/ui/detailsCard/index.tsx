import { PostDataPorps } from 'types'

import './detailsCard.css'

const DetailsCard = ({ data }: PostDataPorps) => {
    return (
        <>
            {data ? (
                <div className='detailsCard'>
                    <h1>Пост №{data?.id}</h1>
                    <h2>{data?.title}</h2>
                    <div className='detailsCardContent'>
                        <span>{data?.content}</span>
                        <img src={data?.image} alt='There is pict' width={400} height={200} />
                    </div>
                    <div className='detailsCardUser'>
                        <span>Пользователь: {data?.userId}</span>
                        <span>Категория: {data?.category}</span>
                        <div className='detailsCardUserDate' >
                            <span>Опубликовано: {data?.publishedAt}</span>
                            <span>Изменено: {data?.updatedAt}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='detailsCardNotFound'>
                    <span>Пост не найден</span>
                </div>
            )}
        </>
    )
}

export default DetailsCard