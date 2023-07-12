import React from 'react';

// function NestedSelectBox() {

//     const data = {
//         countries: [
//             {
//                 name: "India",
//                 states: [
//                     {
//                         name: "UP",
//                         cities: ["Allahabad", "Varanashi", "Lucknow", "Kanpur"]
//                     }
//                 ]
//             },
//             { name: "USA", states: [{ name: "NorthAmerica", cities: ["LA", "California", "New York", "New jersy"] }] },
//             { name: "Country3", states: [{ name: "State1", cities: ["City1", "City2", "City3", "City4"] }] }

//         ]
//     }
//     const [selectedCountry, setSelectedCountry] = React.useState();
//     const [selectedState, setSelectedState] = React.useState();
//     const [selectedCity, setSelectedCity] = React.useState();

//     const availableState = data.countries.find((c) => c.name === selectedCountry);
//     const availableCities = availableState?.states?.find((s) => s.name === selectedState);

//     console.log(availableState)


//     return (
//         <>
//             <div>
//                 <label>Select Country:</label>
//                 <select
//                     value={selectedCountry}
//                     onChange={(e) => setSelectedCountry(e.target.value)}
//                 >
//                     <option>Choose Country</option>
//                     {data.countries.map((value, key) => {
//                         return (
//                             <option value={value.name} key={key}>
//                                 {value.name}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//             <div>
//                 <label>Select State:</label>
//                 <select
//                     value={selectedState}
//                     onChange={(e) => setSelectedState(e.target.value)}
//                 >
//                     <option>Choose State</option>
//                     {availableState?.states.map((e, key) => {
//                         return (
//                             <option value={e.name} key={key}>
//                                 {e.name}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//             <div>
//                 <label>Select City:</label>
//                 <select
//                     value={selectedCity}
//                     onChange={(e) => setSelectedCity(e.target.value)}
//                 >
//                     <option>Choose City</option>
//                     {availableCities?.cities.map((value, key) => {
//                         return (
//                             <option value={value.name} key={key}>
//                                 {value}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>

//         </>
//     );
// }

function NestedSelectBox() {

    const data = {
        countries: [{
            name: "India",
            states: [
                { name: "Uttar Pradesh", cities: ["Allahabad", "Varanashi", "Lucknow", "Kanpur"] },
                { name: "Bihar", cities: ["Patna", "Bhagalpur", "Gaya", "Darbhanga"] },
                { name: "Maharastra", cities: ["Mumbai", "Pune", "Nagpur", "Aurangabad"] }
            ]
        },
        { name: "USA", states: [{ name: "NorthAmerica", cities: ["LA", "California", "New York", "New jersy"] }] },
        {
            name: "Country3", states: [
                { name: "State01", cities: ["City01", "City02", "City03", "City04"] },
                { name: "State11", cities: ["City11", "City12", "City13", "City14"] },
                { name: "State21", cities: ["City21", "City22", "City23", "City24"] }
            ]
        }]
    }

    const [country, setCountry] = React.useState();
    const [state, setState] = React.useState();
    const [city, setCity] = React.useState();

    const availableState = data.countries.find((c) => c.name === country);
    const availableCity = availableState?.states.find((s) => s.name === state);

    // console.log(availableState);

    const countryList = data.countries.map((value, key) => {
        return (<option value={value.name}>{value.name}</option>)
    });
    const stateList = availableState?.states.map((value, key) => {
        return (<option value={value.name}>{value.name}</option>)
    });
    const cityList = availableCity?.cities.map((value, key) => {
        return (<option value={value}>{value}</option>)
    });

    return (
        <>
            <div>
                <label>Select Country: </label>
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option>Choose Country</option>
                    {countryList}
                </select>
            </div>
            <div>
                <label>Select State: </label>
                <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option>Choose State</option>
                    {stateList}
                </select>
            </div>
            <div>
                <label>Select City: </label>
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option>Choose City</option>
                    {cityList}
                </select>
            </div>

        </>
    );
}

export default NestedSelectBox;