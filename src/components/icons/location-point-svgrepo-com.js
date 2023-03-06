import styled from "styled-components";

const LocationPointSvgrepoComStyled = styled.div`
  display: inline;
`;

function LocationPointSvgrepoCom() {
  return (
    <LocationPointSvgrepoComStyled>
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="10"
          r="3"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </LocationPointSvgrepoComStyled>
  );
}

export default LocationPointSvgrepoCom;
