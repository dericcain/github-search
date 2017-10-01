import styled from 'styled-components';

export const FollowersGridContainer = styled.div`text-align: center;`;

export const FollowersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FollowerGridItem = styled.div`
  position: relative;
  display: flex;
  width: 14%;
  margin-bottom: 2%;
  justify-content: center;
  algn-items: center;

  .handle-popup {
    display: none;
  }

  &:hover {
    .handle-popup {
      display: block;
    }
  }
`;

export const FollowerAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const FollowerHandle = styled.div`
  position: absolute;
  font-size: 13px;
  top: -28px;
  background-color: #333;
  padding: 4px 6px;
  color: #fff;
  border-radius: 4px;
  width: auto;

  &:before {
    content: ' ';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #333;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -2px;
  }
`;
