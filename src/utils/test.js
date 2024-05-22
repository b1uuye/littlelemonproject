import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI} from '../utils/fetchapi';

const initialState = {availableTimes: fetchAPI(new Date())};
const [state, dispatch] = useReducer(updateTimes, initialState);

function updateTimes(state,date){
  return { availableTimes: fetchAPI(new Date())}
}

const navigate = useNavigate();
function submitForm (formData){

  if(submitAPI(formData)){
    navigate('/booked');
  }
}

const Bookings = () => {
    const [
      availableTimes,
      dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();
  
    const submitData = formData => {
      const response = submitAPI(formData);
      if (response) navigate(pages.get('confirmedBooking').path);
    }; 
  
    return (
      <div className="bookings">
        <h2>Table reservation</h2>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatchOnDateChange={dispatchOnDateChange} 
          submitData={submitData} 
        />
      </div>
    );
  };
