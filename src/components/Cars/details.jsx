import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { fetchUserCars } from '../../redux/Actions/car-actions';
import { resetState } from '../../redux/Slices/carDetails-slice';
import './details.css';

export const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const id = location.state?.id;

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserCars(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.carDetailsSlice[0]?.car);

  const imageSectionStyles = {
    backgroundImage: `url(${details?.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="details-container">
      <section style={imageSectionStyles} className="details-image" />
      <section className="details-info">
        <div className="details-top">
          <h5 className="details-name">{details?.name}</h5>
          <p className="details-description">{details?.description}</p>
          <ul className="details-list">
            <li>
              <span>Model</span>
              <span>{details?.model}</span>
            </li>
            <li>
              <span>Price</span>
              <span>{details?.price}</span>
            </li>
          </ul>
          <div className="details-link-container">
            <Link className="details-link" to="/">
              discover more models
              <span>➤</span>
            </Link>
          </div>
        </div>
        <div className="reserve-btn-container">
          <div className="details-reserve-btn">
            <Link to="/reserve" state={details}>
              <button type="button" className="details-btn">
                <span className="reserve-text">Reserve</span>
                <img className="right-icon" alt="reserve-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nM3Xu24TURAGYCM5OHSEwpQQCgoQFQ0NJHFoIMCbgAS8AV0gOI8QjAhIRDQQLooicZHzDkAEb0ACgiJUHzrKFBuwvbu+iBzpSEezc+bfmZ35Z7ZS2e8Lh3AVC1jG+9jpfA9XMD5MwBN4iF/4hqe4j5ux03kFW6HzAJODANbQxG88xwyqPfSraGA17qTI1MqCHsUGPuJ8Hy89hc9oo14G9Cve4HBZ0IydCazhSy54hHcjQLuGtQR4NcDbONhLsRnh7dvTLp5/SpnfK3tTUlzIMXQaN0qCT2OnY7ZHybwoYOQMvmOxJPhLtDqRQ6rBmYJGzpUFxyx+7iEZXAtyKJxQOBuksYgDBfTHQn8uK0yUt1IUtF/P8Qx3s4InXbNuiJ7bpdflrOAtbvUDnPH8B+7k6N1OWPsC+HEi9UFDXUC3iUf/K7nms4LUxLdTyo/C09AfC4xLWeF4FHdjhARy8R8CiQet1MQLGDjVJ2W+wlKnB5NB5FM5Bk7ieknQRtg+3k1hIVrYRBnDOaBHsLknqboMAu1o3sMYBFJCreNDz0EglOsxrqwN4nl4ul5o9PkLvB1hn66UXPFNN8PTetnLtSCWnWjis73qPMKaSuZ13JnPDW+vFdneikFhK9inmRnomyHbjjpdwrHKsJZdkplL/TTxLd7FTuckuzzUX5hRrT+dIUr6Buw0mQAAAABJRU5ErkJggg==" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
