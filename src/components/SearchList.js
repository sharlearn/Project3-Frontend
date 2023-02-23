const SearchList = ({ searchResults }) => {
  return (
    <div className="list-group">
      {searchResults.map((item, index) => (
        <button
          type="button"
          className="list-group-item list-group-item-action"
          key={index}
        >
          {item.design_name}
        </button>
      ))}
    </div>
  );
};

export default SearchList;
