import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean']['output'];
  validateUserAndUpdateDeviceToken: User;
};


export type MutationDeleteUserArgs = {
  reason: Scalars['String']['input'];
};


export type MutationValidateUserAndUpdateDeviceTokenArgs = {
  deviceToken: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  deviceToken?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, deviceToken?: string | null } };

export type ValidateUserAndUpdateDeviceTokenMutationVariables = Exact<{
  deviceToken: Scalars['String']['input'];
}>;


export type ValidateUserAndUpdateDeviceTokenMutation = { __typename?: 'Mutation', validateUserAndUpdateDeviceToken: { __typename?: 'User', id: string } };

export type DeleteUserMutationVariables = Exact<{
  reason: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


export const CurrentUserDocument = gql`
    query CurrentUser {
  me {
    id
    email
    deviceToken
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ValidateUserAndUpdateDeviceTokenDocument = gql`
    mutation validateUserAndUpdateDeviceToken($deviceToken: String!) {
  validateUserAndUpdateDeviceToken(deviceToken: $deviceToken) {
    id
  }
}
    `;
export type ValidateUserAndUpdateDeviceTokenMutationFn = Apollo.MutationFunction<ValidateUserAndUpdateDeviceTokenMutation, ValidateUserAndUpdateDeviceTokenMutationVariables>;

/**
 * __useValidateUserAndUpdateDeviceTokenMutation__
 *
 * To run a mutation, you first call `useValidateUserAndUpdateDeviceTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateUserAndUpdateDeviceTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateUserAndUpdateDeviceTokenMutation, { data, loading, error }] = useValidateUserAndUpdateDeviceTokenMutation({
 *   variables: {
 *      deviceToken: // value for 'deviceToken'
 *   },
 * });
 */
export function useValidateUserAndUpdateDeviceTokenMutation(baseOptions?: Apollo.MutationHookOptions<ValidateUserAndUpdateDeviceTokenMutation, ValidateUserAndUpdateDeviceTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateUserAndUpdateDeviceTokenMutation, ValidateUserAndUpdateDeviceTokenMutationVariables>(ValidateUserAndUpdateDeviceTokenDocument, options);
      }
export type ValidateUserAndUpdateDeviceTokenMutationHookResult = ReturnType<typeof useValidateUserAndUpdateDeviceTokenMutation>;
export type ValidateUserAndUpdateDeviceTokenMutationResult = Apollo.MutationResult<ValidateUserAndUpdateDeviceTokenMutation>;
export type ValidateUserAndUpdateDeviceTokenMutationOptions = Apollo.BaseMutationOptions<ValidateUserAndUpdateDeviceTokenMutation, ValidateUserAndUpdateDeviceTokenMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($reason: String!) {
  deleteUser(reason: $reason)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;