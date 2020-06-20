import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Collapse from "@material-ui/core/Collapse";

export default function ModalCategory(props) {
  const [isExpend1, setIsExpend1] = useState(false);
  const [isExpend2, setIsExpend2] = useState(false);
  const [isExpend3, setIsExpend3] = useState(false);

  const { hanleCloseCategory } = props;
  const dispatch = useDispatch();
  const handleSelectCategory = (e) => {
    const value = e.target.value;
    dispatch({
      type: "CHOOSE_CATEGORY",
      choose: value,
    });
  };
  const handleEpendCategory = (num) => {
    if (num === 1) {
      setIsExpend1(!isExpend1);
    }
    if (num === 2) {
      setIsExpend2(!isExpend2);
    }
    if (num === 3) {
      setIsExpend3(!isExpend3);
    }
  };
  return (
    <div className="container-category">
      <div className="form-category">
        <div>
          <div
            onClick={() => {
              return handleEpendCategory(1);
            }}
            className="header-category"
          >
            <div className=" icon icon-header-category">
              <i className="fas fa-hamburger"></i>
            </div>
            <span>Food and Beverage</span>
          </div>
          <Collapse
            in={isExpend1}
            timeout="auto"
            unmountOnExit
            disableStrictModeCompat={true}
          >
            <div className="container-category-icon">
              <div className="category-icon">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-mug-hot"></i>
                  </div>
                  Cafe
                  <input
                    type="radio"
                    value={["cafe", "1", "fas fa-mug-hot"]}
                    onChange={handleSelectCategory}
                    name="category"
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color2">
                    <i className="fas fa-bread-slice"></i>
                  </div>
                  Breakfast
                  <input
                    type="radio"
                    value={["breakfast", "2", "fas fa-bread-slice"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color3">
                    <i className="fas fa-concierge-bell"></i>
                  </div>
                  Lunch
                  <input
                    type="radio"
                    value={["lunch", "3", "fas fa-concierge-bell"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color4">
                    <i className="fas fa-utensils"></i>
                  </div>
                  Dinner{" "}
                  <input
                    type="radio"
                    value={["dinner", "4", "fas fa-utensils"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color5">
                    <i className="fas fa-glass-cheers"></i>
                  </div>
                  Drink
                  <input
                    type="radio"
                    value={["drink", "5", "fas fa-glass-cheers"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-cookie-bite"></i>
                  </div>
                  Others
                  <input
                    type="radio"
                    value={["drink", "1", "fas fa-cookie-bite"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
            </div>
          </Collapse>
        </div>
        {/* ---------------------------------------------------- */}
        <div>
          <div
            onClick={() => {
              return handleEpendCategory(2);
            }}
            className="header-category"
          >
            <div
              className=" icon icon-header-category"
              style={{ backgroundColor: "#2a9d8f" }}
            >
              <i className="fas fa-home"></i>
            </div>
            <span>Home</span>
          </div>
          <Collapse
            in={isExpend2}
            timeout="auto"
            unmountOnExit
            disableStrictModeCompat={true}
          >
            <div className="container-category-icon">
              <div className="category-icon">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-money-bill-wave-alt"></i>
                  </div>
                  House fee
                  <input
                    type="radio"
                    value={[" house-fee", "1", "fas fa-money-bill-wave-alt"]}
                    onChange={handleSelectCategory}
                    name="category"
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color2">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  Electricity
                  <input
                    type="radio"
                    value={["electricity", "2", "fas fa-lightbulb"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color3">
                    <i className="fas fa-desktop"></i>
                  </div>
                  Cable TV
                  <input
                    type="radio"
                    value={("cable-tv", "3", "fas fa-desktop")}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color4">
                    <i className="fas fa-fire"></i>
                  </div>
                  Gas
                  <input
                    type="radio"
                    value={["gas", "4", "fas fa-fire"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color5">
                    <i class="fas fa-faucet"></i>
                  </div>
                  Water
                  <input
                    type="radio"
                    value={["water", "5", "fas fa-faucet"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-faucet"></i>
                  </div>
                  Phone
                  <input
                    type="radio"
                    value={["phone", "1", "fas fa-faucet"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color2">
                    <i className="fas fa-globe-asia"></i>
                  </div>
                  Internet
                  <input
                    type="radio"
                    value={["internet", "2", "fas fa-globe-asia"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
            </div>
          </Collapse>
        </div>
        {/* ------------------------------------------------ */}
        <div>
          <div
            onClick={() => {
              return handleEpendCategory(3);
            }}
            className="header-category"
          >
            <div
              className=" icon icon-header-category"
              style={{ backgroundColor: "#2a9d8f" }}
            >
              <i className="fas fa-home"></i>
            </div>
            <span>Home</span>
          </div>
          <Collapse
            in={isExpend3}
            timeout="auto"
            unmountOnExit
            disableStrictModeCompat={true}
          >
            <div className="container-category-icon">
              <div className="category-icon">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-money-bill-wave-alt"></i>
                  </div>
                  House fee
                  <input
                    type="radio"
                    value={[" house-fee", "1", "fas fa-money-bill-wave-alt"]}
                    onChange={handleSelectCategory}
                    name="category"
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color2">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  Electricity
                  <input
                    type="radio"
                    value={["electricity", "2", "fas fa-lightbulb"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color3">
                    <i className="fas fa-desktop"></i>
                  </div>
                  Cable TV
                  <input
                    type="radio"
                    value={("cable-tv", "3", "fas fa-desktop")}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color4">
                    <i className="fas fa-fire"></i>
                  </div>
                  Gas
                  <input
                    type="radio"
                    value={["gas", "4", "fas fa-fire"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color5">
                    <i class="fas fa-faucet"></i>
                  </div>
                  Water
                  <input
                    type="radio"
                    value={["water", "5", "fas fa-faucet"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color1">
                    <i className="fas fa-faucet"></i>
                  </div>
                  Phone
                  <input
                    type="radio"
                    value={["phone", "1", "fas fa-faucet"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
              <div className="category-icon ">
                <label>
                  <div className="icon category-color2">
                    <i className="fas fa-globe-asia"></i>
                  </div>
                  Internet
                  <input
                    type="radio"
                    value={["internet", "2", "fas fa-globe-asia"]}
                    name="category"
                    onChange={handleSelectCategory}
                  />
                </label>
              </div>
            </div>
          </Collapse>
        </div>
        <button
          onClick={() => {
            return hanleCloseCategory();
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
