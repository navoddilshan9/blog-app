import { CongnitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_kivfUvYkt',
  ClientId: '5fjb4vc3520nruvibi96n2tc84',
}

export default new CongnitoUserPool(poolData)
