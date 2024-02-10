import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ToDoProps {}

const StyledToDo = styled.div`
  color: pink;
`;

export function ToDo(props: ToDoProps) {
  return (
    <StyledToDo>
      <h1>Welcome to ToDo!</h1>
    </StyledToDo>
  );
}

export default ToDo;
