import Card from "./Card"
const SearchResults = ({results}) => {
    return (
        <div className="flex flex-wrap items-center justify-around w-2/4">
            {results && results.map( result => <Card result={result} key={result}></Card>)}
        </div>)
}

export default SearchResults