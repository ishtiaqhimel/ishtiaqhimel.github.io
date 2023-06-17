# Computer Network
## Basic Network Theory and Terminology
- Two or more computers that are connected with one another for the purpose of communicating data electronically.

## Components of a Network
- Devices (router, switches, printer etc)
- Media (wire/ wireless-wifi)
- Adapter (NIC-network interface controller)
- Network OS (Allocates Resources, Monitors Activities, Manages Disks and files)

## Node
- Any device that is connected to a communications network
- Endpoint Nodes (PC, printers), Redistribution nodes (router, switches, hub)

## Server
- share/provide resources and manages services like addressing 142.168.25.15
- Manages devices on the network and controls network wide functions like permissions.

## Network Backbone
- Types of network backbones:
    - Serial: One backbone cable, multiple switches connected 
    - Hierarchical/Distributed: Easy management, typical for LAN's, Easily scalable.
    - Collapsed: Uses a Router as the connecting point
    - Parallel: Like collapsed, but uses multiple cable connections. Great for redundancy

## Terminal
- Dummy Computer
- No Processing capabilities of its own
- No memory of its own
- Terminal emulator needed


## Client
- Has its own processor
- Has memory of its own

## Peer
- Provides its own resources and services
- self managed and self contained

server/client <--------> server/client

---
## NIC
- can be wired or wireless 
- ethernet port to connect to the media
- connects either directly to the motherboard, through another card or via USB, Firewall port or PC card

## Transceiver
- transmits and receives traffic
- built dirctly on the network card

## Switch
- common connecting point for nodes on a network
- looks at the MAC address of each packet of data for forwarding
- data is transmitted by one node and forwarded only to the receiving node or nodes

## Router
- looks at the IP address for routing of the data (not MAC address)
- can only be used with routable protocols

## Gateway
- similar to a router in the way it functions
- utilizes routable protocols similar to a router
- Allows networks with dissimilar (translation) protocols to communicate
- Not "default gateway"

## Virtual Switch
- Functions exactly as a physical switch. Cannot directly communicate between two virtual switches. A router needs to be configured for this.

## Virtual Router
- A virtual router is the software that can be installed on a device with two NICs for routing traffic

## Virtual server 
A server that operates independently of its host machine. Software based CPU, RAM, NIC and hard drive.

---
## Port
- an process-specific or application-specific designation, serving as a communications endpoint in a computer's OS.
- Identifies processes and applications and the allowed communication paths they take in a network.
- Ports range from 1 to 65,535. Port 0 is reserved and cannot be used.
    - 1-1023 used by well-known, common services
    - 1024-49,151 Reserved by applications and programs
    - 49,152-65,535 Used by unregistered services and temporary connections.

---
## OSI
- L1 - Physical (media- cables, wifi, bluetooth etc) -> Bits
- L2 - Datalink (switch (same network), hub) -> Frames
    - Sub-Layer1 - MAC (Physical Address)
    - Sub-Layer2 - LLC
- L3 - Network (Routers (dif. network)) -> datagram
    - IP Address
- L4 - Transport -> segments
- L5 - Session -> RPC, TLS, SSL
- L6 - Presentation -> Gateway operates in this layer -> encryption/compression -> data
- L7 - Application -> user interaction -> SMTP, DNS, FTP, NTP, HTTP etc

ARP (Address Resolution Protocol) -> maps MAC to IP -> this operates in L2 & L3

UDP - connectionless (L3) -> quick

TCP - connection oriented (L4) -> ACK -> reliable

Application Support Block -> L7, L6, L5, others are Network Support Block

## TCP/IP
- Widely used model
- L1 - Network Interface (L1, L2)
- L2 - Internet (L3) -> MTU (max transmission units) 1500 -> datagram (fragmentation)
- L3 - Transport (L4) -> TCP/ UDP -> {Protocol, IP Address, Port number} -> {TCP, 125.176.15.11, 67}
- L4 - Application (L5, L6, L7) 