import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 500px;
  margin-top: 24px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 50%;
  left: 24px;
  margin-top: -12px;
`;

export const ResultsContainer = styled.div`
  z-index: 99;
  position: absolute;
  top: 103%;
  left: 0;
  width: 100%;
  max-height: 360px;
  overflow-y: auto;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const ResultWrapper = styled.div`
  padding: 12px;
  display: flex;
  position: relative;

  .search-result-icon {
    display: none;
    position: absolute;
    height: 18px;
    width: 18px;
    top: 50%;
    right: 12px;
    margin-top: -9px;
  }

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
    color: #71b045;

    .search-result-icon {
      display: block;
    }
  }
`;

export const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  flex: 5;
  margin-left: 18px;
  justify-content: center;
  align-self: center;
`;

export const SearchInput = styled.input`
  padding: 6px 72px;
  height: 58px;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  outline: none;
  border: none;
  font-size: 16px;
  color: #333;
  display: flex;
  margin: 12px auto;
  transition: all ease 0.2s;

  &:focus {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all ease 0.2s;
  }

  &::placeholder {
    color: #aaa;
    font-weight: 200;
  }
`;
