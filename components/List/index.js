import {
  Container,
  Avatar,
  Card,
  Typography,
  IntialContainer,
} from "./list.style";

export const ListOfMembers = ({ data }) => {
  return (
    <IntialContainer>
      <Typography font="Sarabun" variant="h2">
        {data.title}
      </Typography>
      <Container>
        {data &&
          data.volunteers.map((item, index) => (
            <Card height={"225px"} key={index} width={"240px"}>
              <Avatar
                alt={item.title}
                url={item?.photo && item?.photo?.url}
                width={112}
                height={112}
              />
              <Typography font="Sarabun" variant="h6">
                {item.title}
              </Typography>
              {/* <Typography font="Sarabun" variant="body2">
                {item.role}
              </Typography> */}
            </Card>
          ))}
      </Container>
    </IntialContainer>
  );
};
