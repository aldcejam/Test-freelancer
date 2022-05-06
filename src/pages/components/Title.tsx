
type titleProps = {
    title: string
}

export default function Title({title}: titleProps){
    return(
        <h2 className="text-title text-3xl font-medium">
            {title}
        </h2>
    )
}