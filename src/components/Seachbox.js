const Searchbox = ({ onSearch }) => {
    return (
      <input className="p-3 h-9 border rounded-3xl w-3/6 m-3" onChange={ (e) => onSearch(e) } type="text" />
    );
}

export default Searchbox;