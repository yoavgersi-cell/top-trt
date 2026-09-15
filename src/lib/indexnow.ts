// IndexNow key for www.toptrt.io. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "45725378bef21748b56e9c6335548168e8416b1f90e8500c3674462fa5d2b39e";
export const INDEXNOW_HOST = "www.toptrt.io";
