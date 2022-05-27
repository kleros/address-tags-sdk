# Address Tags SDK

Simple library to get address information from the Kleros curated tags registry.

## Getting Started

### Installing

```
npm install @kleros/address-tags-sdk
```

```
yarn add @kleros/address-tags-sdk
```

### Example

```javascript
import { getAddressInfo } from "@kleros/address-tags-sdk";

const addressInformation = getAddressInfo(
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "https://ipfs.kleros.io"
);
```

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License.
