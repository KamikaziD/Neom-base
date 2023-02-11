import React, { useState } from "react";
import { Props } from "next/dist/client/script";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: 'rgba(29, 31, 34, 0.75)',
    backdropFilter: 'blur(1.3509px)',
    borderRadius: '10.8072px',
    border: 'none',
    height: '50px',
    boxShadow: 'none'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white'
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: '0px'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  })
};
const options = [
  {
    value: "14 Regions",
    label: (
      <>
        <span style={{ fontWeight: "bold", color:"#EBC03F" }}>14</span>
        <span style={{ color: "grey" }}> Regions </span>
      </>
    ),
  },
  {
    value: "12 Timelapse Cameras",
    label: (
      <>
        <span style={{ fontWeight: "bold", color:"#EBC03F"  }}>12</span>
        <span style={{ color: "grey" }}> Timelapse Cameras </span>
      </>
    ),
  },
  {
    value: '10 Live Cameras"',
    label: (
      <>
        <span style={{ fontWeight: "bold", color:"#EBC03F"  }}>10 </span>
        <span style={{ color: "grey" }}> Live Cameras </span>
      </>
    ),
  },

  {
    value: '15 Drones"',
    label: (
      <>
        <span style={{ fontWeight: "bold", color:"#EBC03F"  }}>15 </span>
        <span style={{ color: "grey" }}> Drones </span>
      </>
    ),
  },
  {
    value: '150K Videos"',
    label: (
      <>
        <span style={{ fontWeight: "bold", color:"#EBC03F"  }}>150K </span>
        <span style={{ color: "grey" }}> Videos </span>
      </>
    ),
  },
];

const HeaderRegionsResponsiveness: React.FC<Props> = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        styles={customStyles}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default HeaderRegionsResponsiveness;
