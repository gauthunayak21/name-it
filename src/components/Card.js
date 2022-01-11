const Card = ( { result } ) => {

    const url = `https://www.namecheap.com/domains/registration/results/?domain=${result}`
    return <a href={url} target="_blank" className="p-2 m-2 text-center border rounded-full bg-violet-400">
        {result}
    </a>
}

export default Card;