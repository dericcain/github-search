import styled from 'styled-components';

export const UserInfoWrapper = styled.section`
  max-width: 400px;
  margin: 24px auto;
  font-family: 'Roboto', sans-serif;
`;

export const UserInfoDetails = styled.div`
  border-bottom: 1px #b7bbc4 dotted;
  padding: 12px 0;
  margin-bottom: 36px;
  display: flex;
`;

export const UserInfoAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const UserInfoHandle = styled.div`
  display: flex;
  flex: 5;
  align-items: center;
  padding-left: 8px;
  color: #71b045;
  font-size: 18px;
`;

export const UserInfoFollowerCount = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoFollowerCountBadge = styled.span`
  display: inline-block;
  padding: 2px 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: #586069;
  background-color: rgba(27, 31, 35, 0.08);
  border-radius: 20px;
  margin-left: 4px;
`;

export const WaitingMessageContainer = styled.div`
  text-align: center;
  display: ${props => (props.isActive ? 'block' : 'none')};
  
  h2 {
    color: #777;
    line-height: 42px;
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
`;
