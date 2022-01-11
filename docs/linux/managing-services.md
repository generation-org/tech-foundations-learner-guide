---
sidebar_position: 5
---

# Managing Services

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain the relationship between processes, services, daemons and applications
* View running processes and system resource usage

### Key Points

* Processes are instances of a program being run
* Processes can be:
  * Applications, which are interactive
  * Daemons, which are non-interactive
* Some processes, called services, respond to requests from other processes
* Running processes and system load can be viewed using the top command

## Breakdown

### Processes

A process is simply computer code in the *process* of being executed. To start a process, we *invoke* a program - either by double clicking it, or by . We could invoke a program multiple times, with different options or arguments. A program could be invoked multiple times _in parallel_, meaning that multiple similar processes are *running at the same time*.

Processes are *ephemeral*, only existing while they are running. Processes can only exist when the computer is switched on, and will not persist after a computer is switched off.

:::info
Invoke:

1. To call upon for help, assistance or guidance.
1. To solicit, petition for, appeal to a favorable attutide.
1. To call to mind for some purpose.
1. To conjure up with incantations
:::

:::info
Ephemeral:

1. Something which lasts for a short period of time.

Synonyms: *temporary, transitory, fleeting, momentary, volatile*
:::

### Services, Daemons and Applications

#### Applications

Applications ("Apps") are processes that a user *interacts* with. Examples are computer games or text editors. An application usually makes itself "visible" to a user through a graphical interface, but applications can also be used on the terminal. On the command line, an application normally doesn't return you to the command prompt until it's finished.

#### Daemons

Daemons are processes that users do not interact with. When started they will run in the background, disconnected from the GUI or the terminal. Some processes can run in "Daemon mode" (i.e. in the background) when set up to.

#### Services

Services are processes that serve something to a *client*, which could be on the same computer or another computer. They are usually (though not always) daemons. Examples include web servers and mail servers.

:::info
"Daemon" is a word used in Unix-like operating systems (e.g. Linux). On Windows, Daemons are - confusingly - called services.
:::

### Looking at processes

The `top` command will give you an output of running processes. Each process is listed with columns for each process attribute, including:

* **PID** *(Process ID)* - a unique number assigned to each process.
* **USER** - the user that started the process.
* **S** *(Status)* - the processes *status* (e.g. `R` for running or `S` for sleep).
* **%CPU** - the fraction of a single processor's cycles used by that process.
* **%MEM** - the fraction of total memory in use by that process.
* **COMMAND** - the command that invoked the process.

:::info
A computer can have many processors, and a processor can have many *cores* (separate processing units on a single CPU). Confusingly, we often refer to a single, multi-core CPU as a "processor" - but we often refer to each core as a separate processor too. In software, any reference to a "processor" probably refers to a single core.
:::

In addition, at the top of the screen you can find many metrics, including:

* **up** - the amount of time the system has been running for.
* **Load Average** - the average number of processes waiting in the CPU queue to be processed (averaged over 1, 5 and 15 minutes).
* **Tasks** - the total number of processes running on the system, then those processes split by status.
* **MiB Mem** - Total system memory (in *Mebibytes*), followed by the fraction which is free, in use, or being used for buffers/cache.

:::info
A computer can have many processors, which allows them to run more than one instruction at the same time. Applications measuring CPU utilization sometimes present their stats as a multiple of the number of processors - e.g. 200% utilization could mean a dual-core processor being fully utilized.
:::

### Load Average

The CPU Queue Length is the number of processes that are ready but currently unable to run. This number will change every *cycle*, and so it's not very useful by itself. The Load Average is the *average* of the CPU Queue Length, commonly reported over 1, 5 and 15 minutes. This is a useful metric to glance at if you want to understand the performance of a computer, e.g:

* A high 1 minute load average and a low 5 and 15 minute load average means the load average is going up.
* A high 15 minute load average but a low 1 and 5 minute load average means the load average is going down.

A good rule of thumb is that a load average should be up to 4 per processor - however, it's far more important to pay attention to the *trend*, and understanding what load average is "healthy" really depends on the workload the computer is running.
