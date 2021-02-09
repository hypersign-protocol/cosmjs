import { AccountData, OfflineSigner as OfflineAminoSigner, StdSignature } from "@cosmjs/launchpad";
import { SignDoc } from "./codec/cosmos/tx/v1beta1/tx";
export interface DirectSignResponse {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  readonly signed: SignDoc;
  readonly signature: StdSignature;
}
export interface OfflineDirectSigner {
  readonly getAccounts: () => Promise<readonly AccountData[]>;
  readonly signDirect: (signerAddress: string, signDoc: SignDoc) => Promise<DirectSignResponse>;
}
export declare type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;
export declare function isOfflineDirectSigner(signer: OfflineSigner): signer is OfflineDirectSigner;