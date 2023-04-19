const Title = (props) => 
{
    return (
        <>
            { props.title.length >= 28 ? props.title.substr(0, 28) + '…' : props.title }
        </>
    )
}

export default Title