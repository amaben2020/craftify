export class BVNVerifier {
  ref: string;
  constructor(ref: string) {
    this.ref = ref;
  }

  async verifyBvn() {
    try {
      const response = await fetch(
        `https://vapi.verifyme.ng/v1/verifications/identities/bvn/:${this.ref}`,
        {
          method: 'POST',
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
