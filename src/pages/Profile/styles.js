import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 900px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &:placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        margin: 5px 0 0;
        height: 40px;
        background: #fb6f91;
        color: #fff;
        border: 0;
        align-content: center;
        border-radius: 4px;
        transition: background 0.2s;

        > div {
          display: flex;
          align-self: center;
          margin-right: 10px;

          svg {
            margin-left: 10px;
            margin-right: 10px;
          }

          span {
            margin-right: 10px;
            display: flex;
            color: #fff;
            font-weight: bold;
          }
        }

        &:hover {
          background: ${darken(0.1, '#fb6f91')};
        }
      }
    }
  }
`;
