export type PostRowProps = {
    data: PostRowItemProps
}

type PostRowItemProps = {
    id: number,
    title: string,
    content: string
}

export type PostDetailsProps = {
    id: string
}

export type ButtonPorps = {
    href: string,
    title: string
}

export type PostDetailProps = {
    id: number,
    slug: string,
    url: string,
    title: string,
    content:string,
    image: string,
    thumbnail: string,
    status: string,
    category: string,
    publishedAt: string,
    updatedAt: string,
    userId: number
}

export type PostDataPorps = {
    data?: PostDetailProps
}