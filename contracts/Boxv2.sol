// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract BoxV2 {
    uint256 internal value;
    event ValueChange(uint256 indexed value);

    constructor() {}

    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChange(value);
    }

    function increment() public {
        value = value + 1;
        emit ValueChange(value);
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function version() public pure returns (uint256) {
        return 2;
    }
}
