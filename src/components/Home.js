import React, { useState, useEffect } from "react";

import "../components/css/Home.css";
import { storeProducts } from "../data";
import PriceRange from "./Filters/PriceRange";
import Card from "./assets/Card";
import Filter from "./Filters/Filter";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";

import ShopModal from "./Shop/ShopModal";

const Home = ({ addedItems, setAddedItems, setTotal }) => {
  const [products] = useState(storeProducts);

  const [checkedCompanies, setCheckedCompanies] = useState([]);
  const [niz, setNiz] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [modalArray, setModalArray] = useState([]);

  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  //highest value of price for slider
  const highest = Math.max.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  );

  const [value, setValue] = useState([0, highest]);

  const handleInputText = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const niz = [];
    products.forEach((product) => {
      const { company, companyId } = product;
      const elem = niz.find((e) => e.companyId === companyId);
      if (!elem) {
        niz.push({ company, companyId });
      }
    });
    setNiz(niz);
  }, [products]);

  const handleReset = () => {
    setValue((prevState) => [0, highest]);
    setCheckedCompanies((prevState) => []);
    setSearchTerm((prevState) => "");
  };

  const handleAddItems = (product) => {
    const foundItem = addedItems.findIndex((item) => {
      return item["id"] === product["id"];
    });

    if (foundItem !== -1) {
      addedItems[foundItem]["quantity"] += 1;

      setAddedItems([...addedItems]);
      setTotal((prevCount) => prevCount + 1);
    } else {
      product["quantity"] = 1;
      setAddedItems([...addedItems, product]);
      setTotal((prevCount) => prevCount + 1);
    }
  };

  const handleModal = (product) => {
    setModalArray(product);
    setOpenModal(true);
  };

  return (
    <>
      <div className="home_filter">
        <div className="home_filters">
          <Filter
            setCheckedCompanies={setCheckedCompanies}
            checkedCompanies={checkedCompanies}
            niz={niz}
          />
          <PriceRange
            highest={highest}
            setValue={setValue}
            value={value}
            className="home_priceRange"
          />
          <form className="input_home">
            <Input
              margin="dense"
              color="primary"
              type="text"
              placeholder="Search Perfumes"
              value={searchTerm}
              onChange={handleInputText}
            />
          </form>

          <Button
            className="home__button"
            color="primary"
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>
          <ShopModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            products={products}
            modalArray={modalArray}
          />
        </div>

        <div className="home_card">
          {products.map((product) => {
            const { id, img, title, info, price, companyId } = product;

            if (
              value[0] <= price &&
              value[1] >= price &&
              title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              (checkedCompanies.length === 0 ||
                checkedCompanies.includes(companyId))
            ) {
              return (
                <div key={id}>
                  <Card
                    img={img}
                    title={title}
                    info={info}
                    price={price}
                    id={id}
                    handleModal={() => handleModal(product)}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleAddItems(product)}
                  >
                    Add to Card
                  </Button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
