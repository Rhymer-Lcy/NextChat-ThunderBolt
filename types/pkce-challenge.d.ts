declare module "pkce-challenge" {
  export interface PKCEChallenge {
    code_verifier: string;
    code_challenge: string;
  }
  export default function pkceChallenge(): PKCEChallenge;
}