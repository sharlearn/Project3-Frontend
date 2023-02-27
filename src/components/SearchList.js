import ShirtModal from "./ShirtModal";
import { useState } from "react";

const SearchList = ({ searchResults }) => {
  const [showModal, setShowModal] = useState(false);
  const [designDetails, setDesignDetails] = useState();

  return (
    <div id="search-list-ul" className="list-group z-9999">
      {searchResults.map((item, index) => (
        <div
          id="search-li"
          type="button"
          className="list-group-item list-group-item-action"
          key={index}
          onClick={() => {
            setShowModal(true);
            setDesignDetails(item);
          }}
        >
          {item.design_name}
        </div>
      ))}
      {designDetails && (
        <ShirtModal
          show={showModal}
          imageURL={designDetails.image_url}
          designName={designDetails.design_name}
          designer={designDetails.user.username}
          price={designDetails.price}
          onHide={() => {
            setShowModal(false);
            setDesignDetails();
          }}
        />
      )}
    </div>
  );
};

export default SearchList;
