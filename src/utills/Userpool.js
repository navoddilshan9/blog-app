import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_55ZeOhugJ',
  ClientId: '33576iecmgigfi8edqeulh8gov',
}

export default new CognitoUserPool(poolData)
