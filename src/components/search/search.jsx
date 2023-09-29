  import { faHotel,faCalendarDays,faPerson, } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./search.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import { format } from "date-fns";
  import 'react-date-range/dist/styles.css'
  import 'react-date-range/dist/theme/default.css'
  
  const Search = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
         key: "selection",
      },
  
    ]);
  
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
   const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
    return (
              <div className="searchBar">
                <div className="searchItem">
                  <FontAwesomeIcon icon={ faHotel} className="searchIcon" />
                  <input
                  type="text"
                    placeholder="Where are you going?"
                    className="searchInput"
                  />
                </div>
  
                <div className="searchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="searchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format( date[0].endDate, "MM/dd/yyyy" )}`}
                  </span>
  
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
  

                <div className="searchItem">
                  <FontAwesomeIcon icon={faPerson} className="searchIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="searchText">
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                    </span>
                    {openOptions && (
                    <div className="options">


                      <div className="optionItem">
                         <span className="optionText">Adult</span>
                           <div className="optionCounter">
                            <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>
                            -
                            </button>
                          <span className="optionCounterNumber"> {options.adult} </span>
                          <button className="optionCounterButton" onClick={() => handleOption("adult", "i")} >
                            +
                          </button>
                        </div>
                      </div>
  


                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>
                            -
                          </button>  <span className="optionCounterNumber"> {options.children} </span> <button
                           className="optionCounterButton" onClick={() => handleOption("children", "i")}>
                            +
                          </button>
                        </div>
                      </div>

  
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}>
                            -
                          </button>
                          <span className="optionCounterNumber"> {options.room} </span>
                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>
                               +
                            </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
  
                
                <div className="searchItem">
                   <button className="searchBtn" >Search</button>
                </div>
  
              </div>
  
    )}
  
   
  
  export default Search;