// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Crowdfunding {
    struct Campaign{
        address owner;
        string title;
        string descrition;
        uint target;
        uint amountCollected;
        string image;
        address[] donators;
        uint[] donations;
    }
}