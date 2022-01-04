---
sidebar_position: 3
---

# Permissions

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain how Users and Groups are used in Linux
* Demonstrate how to give read, write and execute access on files and directories
* Explain the role of the superuser

### Key Points
* Every Linux process is run by a user, which could be a normal or system user
* File permissions can be assigned to users directly, or to groups of users
* The “root” user is the superuser, and has all permissions on the server

## Breakdown
### Home Directory
Linux is a *multi-user* system, which means that many users can operate on the system at the same time - with their own access permissions and restrictions.

Most users on a Linux computer have a home directory, and it's usually under `/home/`. For the `centos` user, it's probably `/home/centos/`. The home directory is a space where a user can create and *own* files and directories, away from all the other users on a computer.

```
[centos@host54 ~]$
```

The command prompt tells you useful information at a glance - the format `<user>@<host>` tells you which computer you're connected to and what user you are logged in as. Following that is your current working directory. When you first log in this will probably be `~`, a *tilde*, which is shorthand for the user's home directory.

### Users
```
[centos@host54 ~]$ cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
centos:x:1000:1000:Cloud User:/home/centos:/bin/bash
```

The `/etc/passwd` file is where all the users on a system are configured. Every user is written out along with various settings, separated by colons. The file can be thought of like a spreadsheet, and if it were a spreadsheet it would have the following headings:

| Username | Password | User ID | Group ID |             Description |  Home Directory |   Login Shell |
|----------|----------|---------|----------|-------------------------|-----------------|---------------|
|     root |        x |       0 |        0 |                    root |           /root |     /bin/bash |
|     sshd |        x |      74 |       74 | Privilege-separated SSH | /var/empty/sshd | /sbin/nologin |
|   centos |        x |    1000 |     1000 |              Cloud User |    /home/centos |     /bin/bash |

* **Username** - the user's name on the system
* **Password** - this previously held the user's (encrypted!) password, though this has now been moved to `/etc/shadow`
* **User ID** - a unique numeric identifier for the user on the system
* **Group ID** - the primary group the user belongs to
* **Description** - a description of the user account
* **Home Directory** - the directory the user will always start from when logging in
* **Login Shell** - the shell program that is run when the user logs in

Note that the Login Shell is what you're using as soon as you log into a system interactively. Some accounts are only there for services, not real users, and so they get blocked from interactive login using a dummy shell (`/sbin/nologin`). Those accounts allow an administrator to separate out only the specific permissions a service needs to function.

### Groups
```
[centos@host54 ~]$ cat /etc/group
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:
adm:x:4:centos
tty:x:5:
disk:x:6:
lp:x:7:
mem:x:8:
users:x:100:
nobody:x:65534:
sshd:x:74:
rngd:x:988:
centos:x:1000:
```

Much like users, groups are all configured in a file (`/etc/group`). The format is as follows:

| Group Name | Password | Group ID | Members |
|------------|----------|----------|---------|
|       root |        x |        0 |         |
|        adm |        x |        4 |  centos |
|     centos |        x |     1000 |         |

* **Group Name** - the name of the group
* **Password** - the group's password (now kept in `/etc/gshadow`, though it's mostly unused)
* **Group ID** - a unique numeric identifier for the group on the system
* **Members** - all members of the group

Since all users need to have a primary group, and all files need to be shared with at least one group, a group is typically created for every user. Users can be arranged into groups if you want to give them all the same permissions.

### Listing files
```
[centos@host54 ~]$ ls -la
total 16
drwx------. 5 centos centos  135 Dec 30 21:22 .
drwxr-xr-x. 3 root   root     20 Jun 22  2021 ..
drwx------. 4 centos centos   27 Dec 30 21:29 .ansible
-rw-------. 1 centos centos 1472 Dec 30 21:48 .bash_history
-rw-r--r--. 1 centos centos   18 Jul 21  2020 .bash_logout
-rw-r--r--. 1 centos centos  141 Jul 21  2020 .bash_profile
-rw-r--r--. 1 centos centos  376 Jul 21  2020 .bashrc
drwx------. 2 centos centos   48 Dec 30 21:29 .ssh
drwxr-xr-x. 4 centos centos   56 Dec 30 21:29 instructor_tools
```

Files are all assigned three things, a *user*, a *group*, and a set of *permissions* that govern what that user and group (and also, everyone else) can do with those files. This can be seen in a "long" listing (the `-l` option for `ls`) of a directory, which provides the following fields:

| Permissions | Hard links |   User |  Group | Size | Last Modified |             Name |
|-------------|------------|--------|--------|------|---------------|------------------|
| drwx------. |          5 | centos | centos |  135 |  Dec 30 21:22 |                . |
| drwxr-xr-x. |          3 |   root |   root |   20 |  Jun 22  2021 |               .. |
| drwx------. |          2 | centos | centos |   48 |  Dec 30 21:29 |             .ssh |
| -rwxr-xr-x. |          4 | centos | centos |   56 |  Dec 30 21:29 |          exec.sh |

* **Permissions** - a series of letters that denote what the user, group, and everyone else can do with this file
* **Hard links** - the number of places on the filesystem that link back to this file (this is a more advanced topic)
* **User** - the user that owns this file
* **Group** - the group that owns this file
* **Size** - the size of the file in bytes
* **Last Modified** - a timestamp of when the file was last changed
* **Name** - the name of the file

### File Permissions
Files are given a string that tells the system what different users are allowed to do with them. The first letter of the string tells us the file's *type* - a normal file is just given a `-`, a directory is `d`, etc. Three permissions are then given for the User, then the Group, then Others:
* **Read** - the ability to look at the file's contents
* **Write** - the ability to modify the file's contents
* **eXecute** - the ability to run the file as a program

Thus, on a file with the permission string `-rwxr-xr-x`, the User (`rwx`) can Read, Write and eXecute while the Group and Others (`r-x`) can only Read and eXecute.