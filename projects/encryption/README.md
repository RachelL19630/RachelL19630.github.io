
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 9
My Partner's Key: 6

Our initial shared key: 15

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message                        | Decoded Message                        | Key |
| -------------------------------------- | -------------------------------------- | --- |
| WTAAD                                  | HELLO                                  | 15  |
| TVOOZ                                  | SUNNY                                  | 1   |
| DLHAOLY AVKHF                          | WEATHER TODAY                          | 7   |
| YGDRCIG ENCUU                          | WEBPAGE CLASS                          | 2   |
| JUNG QB LBH GUVAX BS JRO QRFVTA FB SNE | WHAT DO YOU THINK OF WEB DESIGN SO FAR | 13  |

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Rachel]
    Destination: [Marta]  
    Sequence: 1/3
    Data: [01100111] [01110101]
    =========
    Packet 2:

    Source: [Rachel]
    Destination: [Marta]
    Sequence: 2/3 
    Data: [00101011] [01000100]
    =========
    Packet 3:

    Source: [Rachel]
    Destination: [Marta]
    Sequence: 3/3
    Data: [01101011] [01001001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
	- Asymmetric encryption is using a public and private key of a computer (to encrypt with the public key and decrypt with the private). The symmetric encryption is when there is a shared secret used to encrypt and decrypt all the messages.  
- Why is it important that this protocol uses a new key for each message?
	- This protocol using a new key each time is important for security. If someone tries to hack the messages, they could maybe hack one, but because the message changes each time, the person would not be able to hack the message before or the message after, meaning that the conversation is still secure and private. 
- Why is it important that you never share your secret key?
	- It is important that you never share your secret key, because once it is out there and know, all of your messages (if you do not make a new key each time) can be easily decrypted and found out, leading to a leak or breach in the security of the conversations you are having online. 
- In the transport layer, do these messages use TCP or UDP? Why?
	- In the Transport layer, the messages use TCP because path to the other computer is known (so you do not need UDP) and you are sending multiple messages back and forth. 
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
	- Once the packets are done in the trasport layer, the internet layer will route the packets from the source computer to the destination computer. The link layer will then transmit the computer through a physical medium. This medium could be wifi, ethernet, etc.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
	- The adversary in the middle can see that content of the message, they can see the messages as well as a public key if the public key is used.  
