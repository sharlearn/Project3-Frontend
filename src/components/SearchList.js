const SearchList = ({ searchResults }) => {
  return (
    <div id="search-list-ul" className="list-group z-9999">
      {searchResults.map((item, index) => (
        <button
          id="search-li"
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
