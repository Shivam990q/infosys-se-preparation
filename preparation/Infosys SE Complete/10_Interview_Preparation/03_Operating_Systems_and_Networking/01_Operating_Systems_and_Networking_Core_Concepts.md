# ⚙️ Operating Systems & Computer Networks Master Reference

---

## 1. Operating Systems Essentials
- **Process vs Thread:** A process is an executing program with its own memory space and resources; a thread is the smallest unit of execution within a process that shares memory and resources with other peer threads.
- **Deadlock:** A state where two or more processes are permanently blocked because each holds a resource needed by the other.
  - *Coffman Conditions:* Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.
- **Virtual Memory & Paging:** Virtual memory maps physical memory (RAM) to disk space via fixed-size blocks called pages, enabling execution of programs larger than physical memory.

---

## 2. Computer Networks (OSI & TCP/IP)
- **OSI 7 Layers:** Physical → Data Link → Network → Transport → Session → Presentation → Application.
- **TCP vs UDP:** TCP is connection-oriented, reliable, orders packets, and enforces flow/congestion control via 3-way handshake; UDP is connectionless, fast, unreliable, and optimal for real-time video/gaming.
- **What happens when you type a URL into a browser?**
  1. Browser checks cache (browser, OS, router).
  2. DNS resolution queries recursive resolvers to obtain server IP address.
  3. TCP 3-way handshake (`SYN` → `SYN-ACK` → `ACK`) establishes connection (plus TLS handshake for HTTPS).
  4. Browser sends HTTP/HTTPS GET request.
  5. Server processes request and returns HTTP response (HTML, CSS, JS).
  6. Browser renders the DOM and CSSOM tree.
