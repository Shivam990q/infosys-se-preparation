# Infosys Technical Handbook: Hypervisors, Virtualization & Cloud Networking
**Source Document:** `Hypervisors_Cloud_Networking.pdf` (8 Pages)  
**Target Role:** Infosys Systems Engineer (SE) | **Category:** Technical Core CS Interview & Assessment  
**Key Topics:** Type 1 vs Type 2 Hypervisors, VMware vSphere, Virtualization vs Containers, AWS VPC vs Azure VNet, CIDR Subnetting  
**Status:** `100% Complete with Verified Technical Explanations & Practical Calculations`

---

## 🖥️ 1. Hypervisor Architecture: Type 1 (Bare-Metal) vs. Type 2 (Hosted)

A **hypervisor** (Virtual Machine Monitor, VMM) is software or firmware that creates, runs, and isolates multiple guest operating systems on a single physical host.

```
       [ TYPE 1: BARE-METAL ]                      [ TYPE 2: HOSTED ]
┌─────────────────────────────────┐        ┌─────────────────────────────────┐
│  VM 1 (App/OS) │ VM 2 (App/OS)  │        │  VM 1 (App/OS) │ VM 2 (App/OS)  │
├─────────────────────────────────┤        ├─────────────────────────────────┤
│     TYPE 1 HYPERVISOR (ESXi)    │        │  TYPE 2 HYPERVISOR (VirtualBox) │
├─────────────────────────────────┤        ├─────────────────────────────────┤
│       PHYSICAL HARDWARE         │        │         HOST OPERATING SYSTEM   │
│     (Bare-Metal CPU/RAM)        │        ├─────────────────────────────────┤
└─────────────────────────────────┘        │         PHYSICAL HARDWARE       │
                                           └─────────────────────────────────┘
```

| Dimension | Type 1 (Bare-Metal Hypervisor) | Type 2 (Hosted Hypervisor) |
|:---|:---|:---|
| **Installation Layer** | Runs directly on bare physical server silicon. | Runs on top of a conventional host OS (Windows, macOS, Linux). |
| **Performance Overhead** | Near-native speed; direct access to hardware rings. | Higher latency; CPU and I/O instructions traverse host OS kernel. |
| **Security Footprint** | Extremely small attack surface; no underlying host OS. | Vulnerable to host OS zero-day exploits and malware compromises. |
| **Enterprise Standard** | Production data centers, enterprise private clouds. | Local developer testing, desktop sandboxes, academic labs. |
| **Leading Products** | VMware ESXi, Microsoft Hyper-V, KVM, XenServer. | Oracle VirtualBox, VMware Workstation, Parallels Desktop. |

---

## 🏢 2. The VMware Ecosystem: vSphere, ESXi & vCenter

- **VMware ESXi:** The bare-metal Type 1 hypervisor that installs directly on host physical hardware, partitioning CPU, RAM, storage, and networking for guest VMs.
- **vCenter Server:** The centralized management server that orchestrates multiple ESXi hosts from a single administrative pane, enabling:
  - **vMotion:** Live zero-downtime migration of running VMs from one physical host to another.
  - **HA (High Availability):** Automatically restarts failed VMs on surviving physical nodes within seconds of hardware failure.
  - **DRS (Distributed Resource Scheduler):** Automatically balances CPU and memory workloads across server clusters.
- **VMware vSphere:** The comprehensive commercial suite packaging ESXi, vCenter Server, and virtual networking infrastructure.

---

## 📦 3. Virtualization vs. Containerization

```
        VIRTUAL MACHINES                                CONTAINERS
┌──────────────────────────────┐              ┌──────────────────────────────┐
│ App 1 (Bins) │ App 2 (Bins)  │              │ App 1 (Bins) │ App 2 (Bins)  │
├──────────────┼───────────────┤              ├──────────────────────────────┤
│ Guest OS 1   │ Guest OS 2    │              │       CONTAINER ENGINE       │
├──────────────────────────────┤              │          (Docker)            │
│          HYPERVISOR          │              ├──────────────────────────────┤
├──────────────────────────────┤              │       HOST LINUX KERNEL      │
│       PHYSICAL HARDWARE      │              ├──────────────────────────────┤
└──────────────────────────────┘              │       PHYSICAL HARDWARE      │
                                              └──────────────────────────────┘
```

| Technical Trait | Virtual Machines (VMs) | Containers (Docker / Podman) |
|:---|:---|:---|
| **Kernel Architecture** | Each VM runs a full independent guest OS kernel. | Containers share the underlying host OS kernel (cgroups & namespaces). |
| **Storage Footprint** | Gigabytes per VM (due to complete OS images). | Megabytes per container (lean base layers). |
| **Startup Latency** | Minutes (full BIOS boot sequence and OS init). | Milliseconds (sub-second process spawning). |
| **Isolation Strength** | Hard hardware-assisted isolation (VT-x, AMD-V). | Soft OS-level process isolation via Linux namespaces. |

---

## 🌐 4. Cloud Networking: AWS VPC vs. Azure VNet

| Networking Feature | Amazon Web Services (AWS VPC) | Microsoft Azure (Azure VNet) |
|:---|:---|:---|
| **Network Boundary** | Virtual Private Cloud (VPC) tied to 1 AWS Region. | Virtual Network (VNet) tied to 1 Azure Region & Subscription. |
| **Subnet Scope** | Subnets are strictly bound to a single Availability Zone (AZ). | Subnets span across all Availability Zones in the entire Region. |
| **Packet Filtering** | Security Groups (stateful) + Network ACLs (stateless). | Network Security Groups (NSGs, stateful). |
| **Private Connection** | AWS Direct Connect. | Azure ExpressRoute. |
| **Inter-Network Routing**| VPC Peering / AWS Transit Gateway. | VNet Peering / Virtual WAN. |

---

## 🔢 5. CIDR (Classless Inter-Domain Routing) Masterclass

### Subnet Mask & Host Calculation Formula
In a prefix notation `/N`:
$$\text{Host Bits} = 32 - N$$
$$\text{Total IP Addresses} = 2^{32 - N}$$
$$\text{Usable Hosts (Standard)} = 2^{32 - N} - 2 \quad (\text{subtract network & broadcast})$$
*(Note: In AWS/Azure subnets, **5 IPs are reserved** per subnet: Network, Router/Gateway, DNS, Future use, Broadcast. Usable hosts = $2^{32-N} - 5$.)*

### Rapid CIDR Calculation Table
| CIDR Block | Subnet Mask | Total IPs | Standard Usable | Cloud Subnet Usable | Common Use Case |
|:---:|:---|:---:|:---:|:---:|:---|
| **/16** | `255.255.0.0` | $65,536$ | $65,534$ | $65,531$ | Standard default VPC / VNet range |
| **/24** | `255.255.255.0` | $256$ | $254$ | $251$ | Typical standard subnet (e.g., Web/App tier) |
| **/28** | `255.255.255.240`| $16$ | $14$ | $11$ | Small isolated management subnet |
| **/30** | `255.255.255.252`| $4$ | $2$ | $0$ (Cloud requires $\le /28$) | Point-to-point network link |
