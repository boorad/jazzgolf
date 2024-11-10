
# Crypto & Utils for Jazz

* base58
   * @scure/base58
   * encode()
   * decode()

* base64url
   * base64URLtoBytes()
   * bytesToBase64url()

* ed25519
   * @noble/curves/ed25519
   * randomPrivateKey()
   * getPrivateKey()
   * sign()
   * verify()

* x25519
   * @noble/curves/x25519
   * randomPrivateKey()
   * getPrivateKey()
   * getSharedSecret()

* xsalsa20_poly1305
   * @noble/ciphers/xsalsa20
   * encrypt()
   * decrypt()

* xalsa20
   * @noble/ciphers/xsalsa20
   * xalsa20() - both encrypt and decrypt

* randomBytes
   * @noble/ciphers/webcrypto/utils
   * randomBytes()

* blake3
   * @noble/hashes/blake3
   * blake3()
   * create()
   * update()
   * digest()
