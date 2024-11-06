import React, { useState, useEffect, useRef, useMemo } from "react";
import { Form, InputGroup, Button, Spinner } from "react-bootstrap";
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import searchImage from "@icons/svgs/search-icon.svg";
import styles from "./styles.module.scss";
import debounce from "lodash/debounce";
import {getProducts} from '@/apis/productsService';

const SearchBar = (props) => {
  const {id, isText } = props;

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showNoneNoti, setShowNoneNoti] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef(null);
  const SearchBarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const products = await getProducts();
        setProducts(products); // Lưu danh sách sản phẩm
        console.log(products);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);



  const debouncedFilterProducts = useMemo(
    () =>
      debounce(async (query) => {
        if (query.trim().length === 0) {
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }

        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
        setShowSuggestions(query.length > 0 && filtered.length > 0);
        setShowNoneNoti(query.length > 0 && filtered.length === 0);
        setIsLoading(false);
      }, 500),
    [products]
  );

  const debouncedNavigate = useMemo(
    () =>
      debounce((query) => {
        navigate(`/search?query=${encodeURIComponent(query)}`);
        window.location.reload(); // Reload the page after navigation
      }, 500),
    [navigate]
  );

  const debouncedNavigateProduct = useMemo(
    () =>
      debounce((id) => {
        navigate(`/productdetail/${id}`);
        window.location.reload(); // Reload the page after navigation
      }, 500),
    [navigate]
  );

  useEffect(() => {
    return () => {
      debouncedFilterProducts.cancel();
      debouncedNavigate.cancel();
    };
  }, [debouncedFilterProducts, debouncedNavigate]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]);
      setShowSuggestions(false);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      debouncedFilterProducts(query);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts([]);
    setShowSuggestions(false);
    setShowNoneNoti(false);
  };

  const handleClickOutside = (event) => {
    if (
      resultsRef.current &&
      !resultsRef.current.contains(event.target) &&
      SearchBarRef.current &&
      !SearchBarRef.current.contains(event.target)
    ) {
      setShowSuggestions(false);
      setShowNoneNoti(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productsToShow = filteredProducts.slice(0, 5);

  const handleSeeMore = () => {
    debouncedNavigate(searchQuery);
  };

  const handleProductClick = (productId) => {
    debouncedNavigateProduct(productId);
  };

  const handleSearchButtonClick = () => {
    debouncedNavigate(searchQuery);
  };

  return (
    <>
    
    <div className={styles.searchContainer} ref={SearchBarRef}>
      

      <InputGroup className={styles.inputGroup}>
        <Form.Control
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className={styles.formControl}
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => {
            setShowSuggestions(
              searchQuery.length > 0 && filteredProducts.length > 0
            );
            setShowNoneNoti(
              searchQuery.length > 0 && filteredProducts.length === 0
            );
          }}
        />
        {searchQuery && (
          <>
            <div className={styles.clearButton} onClick={clearSearch}>
              <CloseOutlined/>
            </div>
            
          </>
        )}
        <InputGroup.Text 
          className={styles.inputGroupText}
          onClick={handleSearchButtonClick}
          style={{cursor:'pointer'}}
          >
          <img src={searchImage} alt="search-icon" width="45" height="35"  />
        </InputGroup.Text>
      </InputGroup>

      {/* Suggestion box */}
      <div
        className={styles.resultsContainer}
        style={{
          display: searchQuery.length > 0 && (showSuggestions || showNoneNoti || isLoading) ? "block" : "none",
        }}
        ref={resultsRef}
      >
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <Spinner animation="border" role="status" />
            <span>Loading...</span>
          </div>
        ) : filteredProducts.length === 0 && searchQuery ? (
          <p className={styles.noResultsMessage}>
            Không có kết quả trùng khớp.
          </p>
        ) : (
          <>
            {productsToShow.map((product) => (
              <div
                key={product.id}
                className={styles.productItem}
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.preImg}
                  alt={product.name}
                  className={styles.productImage}
                />
                <span>{product.name}</span>
              </div>
            ))}
            {filteredProducts.length > 0 && (
              <Button
                variant="link"
                onClick={handleSeeMore}
                className={styles.moreButton}
              >
                Xem thêm
              </Button>
            )}
          </>
        )}
      </div>
    </div>
    </>
  );
  
};

export default SearchBar;
