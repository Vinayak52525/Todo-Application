import { useParams, useNavigate } from "react-router-dom";
import { useGetUsers } from "../hooks/useGetUsers";
import styled from "styled-components";

const UserDashboard = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetUsers({
    userId,
  });

  if (isLoading)
    return <LoadingMessage>Loading user details...</LoadingMessage>;

  const { image, firstName, lastName, role } = data;

  return (
    <StyledCard>
      <BackButton onClick={() => navigate(-1)}>
        <span> &#8592;</span> Back to Users
      </BackButton>
      <Avatar src={image} alt={`${firstName} ${lastName}`} />
      <UserInfo>
        <UserName>
          {firstName} {lastName}
        </UserName>
        <UserRole>{role}</UserRole>
      </UserInfo>
    </StyledCard>
  );
};

export default UserDashboard;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #0073e6;
  font-size: 14px;
  margin-bottom: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #d1dfee;
`;

const UserInfo = styled.div`
  margin-top: 15px;
`;

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const UserRole = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #666;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 20px;
`;
