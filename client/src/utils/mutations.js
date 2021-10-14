import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($name: String, $email: String, $password: String) {
    RegisterUser(post: { name: $name, email: $email, password: $password }) {
      name
      email
      password
    }
  }
`;
