# Network Devices

A network device is a piece of hardware or software integral to communication between a computer and an internet network. 

Networking devices serve the following general purposes:

- Facilitate data transmission and communication between devices
- Enable efficient and secure network connectivity
- Enhance network performance and optimize traffic flow
- Provide network security by enforcing access control and threat prevention
- Simplify network management and configuration
- Extend network coverage and overcome signal limitations

Here we will discuss about some of network devices and corresponding terms.

## Host

**Host** are any device which sends or receive traffic, such as, Computer, Laptop, Phones, Printers, Servers, Cloud Servers etc. Also any **Internet of Things (IoT)** devices, such as, TV, Speakers, Smart Watches etc.

Hosts typically fall in one of two categories, `Clients` or `Servers`. Clients initiate requests, Servers respond.

## IP Address

An **IP Address** is the identity of each host. In each request, the client is going to stamp the source (`SRC`) and destination (`DST`) ip addresses. The source ip address represents client's ip address and the destination ip address represents server's ip address. When the server respond, the server is going to stamp the source and destination ip addresses. This time the source ip address represents server's ip address and the destination ip address represents client's ip address.

An ip address is just `32 bits`. A bit is `1` or `0`. It is broken to four Octets (`8 bits`) and conveted into decimal (Ex. `172.68.0.1`). Each Octet can be `0` - `255`. This ip addresses are assigned in terms of some hierarchically order (known as **Subnetting**). Lets see the figure below-

[!IP Hierarchy](/art/ip-hierarchy.png)

Here, `10.30.55.127` hosts at ACME in London Branch in Sales Team.

## Network

A **Network** is what transports traffic between Hosts (having similar connectivity).

## Repeater

Data crossing a wire decays as it travels. **Repeaters** regenerate signals. It allows communications across greater distances.

## Hub

Connecting hosts directly to each other doesn't scale. We need a single device that connects all hosts. **Hub** is a simply multi-port **Repeater**. It sends data to all connected devices. It facilitates scaling communication between multiple hosts. 

## Bridge

**Bridges** sit between Hub-connected hosts. Bridges only have two ports. Bridges learn which hosts are on each side. Bridges filter incoming data packets (known as frames) for addresses before being forwarded.

**Bridges** have mostly fallen out of favor in recent years, replaced by more functional **Switches**. 

## Switch

**Switches** are a combination of Hubs and Bridges. Switch has multiple ports. It learns which hosts are on each port.

**Switch** is a device which faciliates communication within a network. Hosts on a Network share the same IP address space (Ex. `192.168.1.x`).

## Router

**Routers** faciliate communication between networks. A router provides a traffic control point (security, filtering, redirecting). Routers learn whcih networks they are attached to. The knowledge of each of these different networks are known as **Routes**. All routes are stored in **Routing Table**. A router has an ip address in every network that they are attached to. This ip address is know as a **Gateway**, each host's way out of their local network. Router creates the hierarchy in Networks and the entire Internet.

There are many other Network Devices:

- Access Points
- Layer 3 Switches
- Firewalls
- IDS/ IPS
- Load Balancers
- Proxies
- Virtual Switches (Used in Cloud)
- Virtual Routers (Used in Cloud)

All of them perform Routing and/or Switching